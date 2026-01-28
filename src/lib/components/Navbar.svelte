<script lang="ts">
    import {page} from "$app/state";
    import LightSwitch from "$lib/components/LightSwitch.svelte";
    import {X, Menu} from "@lucide/svelte";
    import * as m from "$lib/paraglide/messages.js";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    // Reconstruct the structured data from the flat message strings
    const navLinks = [
        {href: "/features", label: m.nav_link_features()},
        {href: "/about", label: m.nav_link_about()},
        {href: "/community", label: m.nav_link_community()},
        {href: "/pricing", label: m.nav_link_pricing()},
    ];

    let isMobileMenuOpen = $state(false);

    function closeMobileMenu() {
        isMobileMenuOpen = false;
        document.body.style.overflow = 'auto';
    }

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    const localeSegment = /^[a-z]{2}(?:-[A-Z]{2})?$/;

    function normalizePathname(pathname: string): string {
        const segments = pathname.split("/").filter(Boolean);

        if (segments.length && localeSegment.test(segments[0])) {
            const rest = segments.slice(1).join("/");
            return rest ? `/${rest}` : "/";
        }

        return pathname;
    }

    function isCurrentPage(href: string): boolean {
        const current = normalizePathname(page.url.pathname);
        return current === href;
    }

    // Track if the page is scrolled
    const scrolled = writable(false);

    function handleScroll() {
        scrolled.set(window.scrollY > 10);
    }

    onMount(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<nav
    class="fixed w-screen top-4 z-50"
    aria-label={m.nav_aria_label()}
>
    <div class="w-auto mx-4 md:mx-15 lg:mx-25 p-3 pl-5 rounded-4xl backdrop-blur-xs transition-colors duration-350 { $scrolled ? 'bg-surface-100/80 dark:bg-surface-800/80' : 'bg-surface-50/80 dark:bg-surface-950/80' }">
        <div class="container flex h-full max-w-none items-center justify-between">
            <!-- Logo/Brand -->
            <a
                href="/"
                class="text-primary-600 dark:text-primary-400 flex items-center gap-3 { $scrolled ? 'text-xl' : 'text-3xl md:text-xl' } font-bold transition-all hover:opacity-80 duration-350 duration-opacity-100"
                onclick={closeMobileMenu}
            >
                <img
                    src="/favicon.svg"
                    alt={m.nav_logo_alt()}
                    class={`${ $scrolled ? 'h-8 w-8' : 'h-15 w-15 md:h-8 md:w-8' } transition-all duration-350`}
                    loading="eager"
                />
                <span>{m.nav_logo_text()}</span>
            </a>
            <!-- Mobile Menu Button -->
            <div class="md:hidden flex pr-3">
                <div class="relative w-6 h-6">
                    <X
                        onclick={toggleMobileMenu}
                        class={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <Menu
                        onclick={toggleMobileMenu}
                        class={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                    />
                </div>
                <span class="sr-only">{m.nav_mobile_openMenu_sr()}</span>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden items-center gap-8 md:flex">
                <ul class="flex items-center gap-1">
                    {#each navLinks as link (link.href)}
                        <li>
                            <a
                                href={link.href}
                                class="text-surface-800 dark:text-surface-200 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                                       {isCurrentPage(link.href) ? 'bg-primary-200/80 dark:bg-primary-800/80' : ''}"
                                aria-current={isCurrentPage(link.href) ? "page" : undefined}
                            >
                                {link.label}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <!-- Primary CTA -->
            <div class="hidden md:flex">
                <a
                    href="/waitlist"
                    class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 hidden rounded-3xl px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:outline-none lg:block"
                >
                    {m.home_finalCta_button()}
                </a>
            </div>
        </div>
    </div>
    <!-- Mobile Navigation -->
    <nav class={`${isMobileMenuOpen ? 'block' : 'hidden'} -z-10 absolute top-0 left-0 w-screen h-screen bg-surface-50 dark:bg-surface-950 p-6 pt-20 md:hidden`}>
        <ul class="space-y-2">
            {#each navLinks as link (link.href)}
                <li>
                    <a
                        href={link.href}
                        onclick={closeMobileMenu}
                        class="text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-surface-100 dark:hover:bg-surface-800 block rounded-lg px-4 py-3 font-medium transition-colors
                                {isCurrentPage(link.href)
                            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50'
                            : ''}"
                        aria-current={isCurrentPage(
                            link.href
                        )
                            ? "page"
                            : undefined}
                    >
                        {link.label}
                    </a>
                </li>
            {/each}
        </ul>
        <LightSwitch />
        <a
            href="/waitlist"
            onclick={closeMobileMenu}
            class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 block w-full rounded-lg px-4 py-3 text-center font-medium text-white transition-colors focus:ring-2 focus:outline-none"
        >
            {m.home_finalCta_button()}
        </a>
    </nav>
</nav>
