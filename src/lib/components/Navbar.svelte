<script lang="ts">
    import {page} from "$app/state";
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
    }

    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
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

    if (typeof document !== "undefined")
    document.addEventListener("click", (event) => {
        const path = event.composedPath();
        const isClickInside = path.some(
            (el) =>
                el instanceof HTMLElement &&
                el.classList.contains("navbar")
        );
        if (!isClickInside) {
            isMobileMenuOpen = false;
        }
    });
</script>

<nav
    class="fixed w-screen top-4 z-50 flex justify-center transition-all duration-300 navbar"
    aria-label={m.nav_aria_label()}
>
    <div class="w-[80vw] md:w-auto p-2 pl-5 rounded-4xl backdrop-blur-sm transition-colors duration-350 bg-surface-100/80 dark:bg-surface-800/80 border-primary-300 border-1">
        <div class="container flex h-full items-center justify-between">
            <!-- Logo/Brand -->
            <a
                href="/"
                class="text-primary-600 dark:text-primary-400 flex items-center gap-3 text-lg font-bold transition-all hover:opacity-80 duration-350 duration-opacity-100"
                onclick={closeMobileMenu}
            >
                <img
                    src="/favicon.svg"
                    alt={m.nav_logo_alt()}
                    class="h-8 w-8"
                    loading="eager"
                />
                <span>{m.nav_logo_text()}</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden items-center gap-8 md:flex mx-5">
                <ul class="flex items-center gap-1">
                    {#each navLinks as link (link.href)}
                        <li>
                            <a
                                href={link.href}
                                class="hover:text-primary-600 dark:hover:text-primary-400 text-xs rounded-lg px-3 transition-colors
                                       {isCurrentPage(link.href) ? 'text-primary-600 dark:text-primary-400' : 'text-surface-800 dark:text-surface-200'}"
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
                    class="bg-primary-600 hover:bg-primary-500 ring-1 ring-primary-700 hidden rounded-4xl md:rounded-3xl px-3 py-2 text-xs text-white transition-colors focus:ring-2 focus:outline-none lg:block"
                >
                    {m.home_finalCta_button()}
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex pr-3">
                <div class="relative w-6 h-6 cursor-pointer">
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
        </div>
    </div>

    <!-- Mobile Navigation -->
    <nav class={`${isMobileMenuOpen ? 'opacity-100 block z-40' : 'opacity-0 pointer-events-none -z-10'} transition-opacity duration-200 p-5 rounded-2xl backdrop-blur-sm absolute top-16 w-[80vw] bg-surface-100/80 dark:bg-surface-800/80 border-primary-300 border-1 md:hidden`}>
        <ul>
            {#each navLinks as link (link.href)}
                <li class="mb-5">
                    <a
                        href={link.href}
                        onclick={closeMobileMenu}
                        class="block rounded-lg transition-colors {isCurrentPage(link.href) ? 'text-black font-bold' : 'text-gray-600 font-medium'}"
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
        <a
            href="/waitlist"
            onclick={closeMobileMenu}
            class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 block w-full rounded-lg px-4 py-3 text-center font-medium text-white transition-colors focus:ring-2 focus:outline-none"
        >
            {m.home_finalCta_button()}
        </a>
    </nav>
</nav>
