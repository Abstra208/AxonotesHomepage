<script>
    import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";
    import * as m from "$lib/paraglide/messages.js";
</script>

<footer
    class="w-screen"
>
    <div class="container max-w-none w-auto py-6 mb-7 px-6 md:px-6 lg:px-8 mx-4 md:mx-15 lg:mx-25 bg-surface-100/80 dark:bg-surface-800/80 backdrop-blur-xs rounded-4xl">
        <div
            class="flex flex-row items-center justify-between sm:flex-row w-full"
        >
            <!-- Logo & Tagline -->
            <div
                class="text-black dark:text-white flex items-center gap-2 text-sm font-medium"
            >
                <img
                    src="/favicon.svg"
                    alt={m.footer_logo_alt()}
                    class="h-5 w-5"
                />
                <span>{m.footer_tagline()}</span>
            </div>
            <LanguageSwitcher />
        </div>

        <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-6 mt-8 text-black dark:text-white">
            <div class="flex flex-col">
                <h1 class="font-bold">{m.nav_link_features()}</h1>
                <div>
                    <a href="/#difference" aria-label={m.nav_link_features()}>Difference</a>
                    <h2>2</h2>
                </div>
            </div>
            <div>
                <h1 class="font-bold">{m.nav_link_about()}</h1>
                <div>
                    <a href="/about#founders" aria-label={m.nav_link_about()}>Founders</a>
                    <h2>2</h2>
                </div>
            </div>
            <div>
                <h1 class="font-bold">{m.nav_link_community()}</h1>
                <div>
                    <h2>1</h2>
                    <h2>2</h2>
                </div>
            </div>
            <div>
                <h1 class="font-bold">{m.nav_link_pricing()}</h1>
                <div>
                    <a href="/pricing#plan" aria-label={m.nav_link_pricing()}><h2>Plan</h2></a>
                    <h2>2</h2>
                </div>
            </div>
        </div>

        <div>
            <div class="flex flex-col md:flex-row items-center justify-between border-b-2 border-black dark:border-white pb-5 pt-5 mb-7">
                <div class="text-black dark:text-white flex items-center gap-2 text-2xl md:text-4xl font-bold">
                    <img
                        src="/favicon.svg"
                        alt={m.nav_logo_alt()}
                        class="h-20 w-20"
                    />
                    <h1 class="font-bold">{m.nav_logo_text()}</h1>
                </div>
                <div class="pt-2 md:pt-0">
                    <a
                        href="/waitlist"
                        class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 rounded-3xl px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:outline-none"
                    >
                        {m.home_finalCta_button()}
                    </a>
                </div>
            </div>
            <div class="flex flex-row sm:flex-row items-center justify-between gap-5">
                <div class="text-black dark:text-white flex flex-wrap items-center gap-x-6 gap-y-4 text-xs">
                    <a
                        href="/legal/imprint"
                        class="hover:underline transition-colors"
                    >
                        {m.footer_link_imprint()}
                    </a>
                    <a
                        href="/legal/privacy-policy"
                        class="hover:underline transition-colors"
                    >
                        {m.footer_link_privacyPolicy()}
                    </a>
                </div>
                <div class="flex items-center gap-5">
                    <a href="https://discord.gg/myBMaaDeQu" target="_blank" rel="noopener noreferrer">
                        <img src="/discord-dark.svg" alt={m.footer_logo_alt()} class="h-5 w-5 hidden dark:block" />
                        <img src="/discord.svg" alt={m.footer_logo_alt()} class="h-5 w-5 dark:hidden" />
                    </a>
                    <a href="https://github.com/axonotes/AxonotesCore" target="_blank" rel="noopener noreferrer">
                        <img src="/github-dark.svg" alt={m.footer_logo_alt()} class="h-5 w-5 hidden dark:block" />
                        <img src="/github.svg" alt={m.footer_logo_alt()} class="h-5 w-5 dark:hidden" />
                    </a>
                </div>
            </div>
            <div class="mt-2 text-black dark:text-white">
                <span class="text-xs">
                    {m.footer_copyright({
                        year: new Date().getFullYear(),
                    })}
                </span>
            </div>        
        </div>
    </div>
</footer>