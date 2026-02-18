<script>
    import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";
    import * as m from "$lib/paraglide/messages.js";
    import Newsletter from "$lib/components/newsletter.svelte";
</script>

<footer
    class="w-screen"
>
    <div class="relative flex flex-col items-center container max-w-none w-auto pb-20 px-6 md:px-6 lg:px-8 bg-surface-100/80 dark:bg-surface-800/80 backdrop-blur-xs border-t-[1px] border-gray-300 dark:border-gray-700">
        <div class="w-full flex justify-center md:justify-start mt-5 md:mt-10">
            <LanguageSwitcher />
        </div>
        <div
            class="flex flex-col justify-between items-center mb-15 mt-10 gap-4"
        >
            <!-- Logo & Tagline -->
            <div
                class="text-black dark:text-white flex flex-col justify-center items-center text-center"
            >
                <div class="text-black dark:text-white flex flex-col items-center gap-2">
                    <img
                        src="/favicon.svg"
                        alt={m.nav_logo_alt()}
                        class="h-16 w-16 md:h-30 md:w-30"
                    />
                    <h1 class="text-2xl md:text-5xl font-bold">{@html m.footer_title()}</h1>
                    <h2 class="text-sm md:text-lg font-bold text-gray-800">{@html m.footer_tagline()}</h2>
                </div>
                <p class="md:max-w-[63%] relaxed text-xs md:text-base font-bold text-gray-600 dark:text-gray-200 mt-5 mb-7">{m.footer_journey()}</p>
                <a
                    href="/waitlist"
                    rel="noopener noreferrer"
                    class="rounded-4xl bg-primary-600 hover:bg-primary-500 ring-1 ring-primary-700 inline-flex min-h-[44px] items-center justify-center gap-2 px-6 py-3 text-sm text-white transition-colors"
                >
                    {m.home_finalCta_button()}
                </a>
            </div>
        </div>
        <div class="max-w-full md:w-[50%] flex flex-col items-center text-center mb-10">
            <h1 class="font-bold text-lg md:text-xl">{m.footer_stay_in_the_loop()}</h1>
            <p class="text-md md:text-lg text-gray-600">{m.footer_stay_in_the_loop_description()}</p>
            <Newsletter action="subscribe"/>
        </div>
        <div class="w-full max-w-7xl md:px-25 text-nowrap">
            <div class="h-[1px] w-full bg-gray-300 my-8"></div>
            <div class="w-auto grid grid-cols-2 grid-rows-3 md:grid-cols-5 md:grid-rows-1 text-black dark:text-white md:mb-10 gap-3">
                <div class="flex flex-col">
                    <h1 class="font-bold mb-3">{m.nav_link_product()}</h1>
                    <div class="flex flex-col gap-1 text-gray-600">
                        <a class="w-fit hover:text-black transition-colors duration-150" href="/#features" aria-label={m.nav_link_product()}>{m.nav_link_product()}</a>
                        <a class="w-fit hover:text-black transition-colors duration-150" href="/pricing#plan" aria-label={m.nav_link_pricing()}>{m.nav_link_pricing()}</a>
                        <a class="w-fit hover:text-black transition-colors duration-150" href="/#faq" aria-label={m.nav_link_faq()}>{m.nav_link_faq()}</a>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h1 class="font-bold mb-3">{m.nav_link_features()}</h1>
                    <div class="flex flex-col gap-1 text-gray-600">
                        <a class="w-fit hover:text-black transition-colors duration-150" href="/features" aria-label={m.nav_link_features()}>{m.nav_link_features()}</a>
                        <a class="w-fit hover:text-black transition-colors duration-150" href="/#difference" aria-label={m.nav_link_features()}>{m.nav_link_comparison()}</a>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h1 class="font-bold mb-3">{m.nav_link_company()}</h1>
                    <div class="flex flex-col gap-1 text-gray-600">
                        <a class="w-fit hover:text-black transition-colors duration-150" href="/about" aria-label={m.nav_link_about()}>{m.nav_link_about()}</a>
                        <a class="w-fit hover:text-black transition-colors duration-150" href="/about#founders" aria-label={m.nav_link_about()}>{m.nav_link_founders()}</a>
                        <a class="w-fit hover:text-black transition-colors duration-150" href="/contact" aria-label={m.nav_link_contact()}>{m.nav_link_contact()}</a>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h1 class="font-bold mb-3">{m.nav_link_community()}</h1>
                    <div class="flex flex-col gap-1 text-gray-600">
                        <a class="w-fit hover:text-black transition-colors duration-150" href="https://discord.gg/myBMaaDeQu" rel="noopener noreferrer" target="_blank">Discord</a>
                        <a class="w-fit hover:text-black transition-colors duration-150" href="https://github.com/axonotes/AxonotesCore" rel="noopener noreferrer" target="_blank">Github</a>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h1 class="font-bold mb-3">{m.nav_link_legal()}</h1>
                    <div class="flex flex-col gap-1 text-gray-600">
                        <a class="w-fit hover:text-black transition-colors duration-150" href="/legal/imprint" aria-label={m.footer_link_imprint()}>{m.footer_link_imprint()}</a>
                        <a class="w-fit hover:text-black transition-colors duration-150" href="/legal/privacy-policy" aria-label={m.footer_link_privacyPolicy()}>{m.footer_link_privacyPolicy()}</a>
                        <a class="w-fit hover:text-black transition-colors duration-150" href="/unsubscribe" aria-label={m.unsubscribe_page_cta()}>{m.unsubscribe_page_cta()}</a>
                    </div>
                </div>
            </div>
            <div class="h-[1px] w-full bg-gray-300 my-8"></div>
        </div>
        <div class="flex flex-col justify-center items-center mt-2 text-black dark:text-white text-xs gap-2 text-center">
            <span>
                {m.footer_copyright({
                    year: new Date().getFullYear(),
                })}
            </span>
            <span>{m.footer_website_made_with_love()}</span>
        </div>
    </div>
</footer>