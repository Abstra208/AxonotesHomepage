<script>
    import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";
    import * as m from "$lib/paraglide/messages.js";
</script>

<footer
    class="w-screen"
>
    <div class="flex flex-col items-center container max-w-none w-auto py-6 mb-7 px-6 md:px-6 lg:px-8 mx-4 md:mx-15 lg:mx-25 bg-surface-100/80 dark:bg-surface-800/80 backdrop-blur-xs rounded-4xl">
        <div
            class="flex flex-col justify-between items-center mb-12 gap-4"
        >
            <!-- Logo & Tagline -->
            <div
                class="text-black dark:text-white flex flex-col justify-center items-center text-center md:max-w-[70%]"
            >
                <div class="text-black dark:text-white flex flex-row items-center gap-2">
                    <img
                        src="/favicon.svg"
                        alt={m.nav_logo_alt()}
                        class="h-15 w-15 md:h-30 md:w-30"
                    />
                    <h1 class="text-3xl md:text-6xl font-bold">{m.nav_logo_text()}</h1>
                </div>
                <h2 class="text-sm font-bold text-gray-800">{m.footer_tagline()}</h2>
                <p class="text-xs font-bold text-gray-600 dark:text-gray-200 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis distinctio voluptatum quas quam maiores tempora inventore saepe exercitationem. Quisquam odio, laboriosam placeat deleniti minus velit ut animi eveniet expedita harum!</p>
                <a
                    href="/waitlist"
                    class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 rounded-3xl px-5 py-3 text-sm font-medium text-white transition-colors focus:ring-2 focus:outline-none"
                >
                    {m.home_finalCta_button()}
                </a>
            </div>
            <LanguageSwitcher />
        </div>
        <div class="max-w-full md:w-[50%] flex flex-col items-center text-center">
            <h1 class="font-bold text-xl">{m.footer_stay_in_the_loop()}</h1>
            <p class="text-gray-600">{m.footer_stay_in_the_loop_description()}</p>
            <div>
                <form action="/subscribe" method="POST" class="flex gap-2 mt-4">
                    <input type="email" name="email" id="email" class="md:w-[23vw] rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500" placeholder={m.footer_email_input()} required>
                    <button type="submit" class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:outline-none">{m.footer_subscribe_button()}</button>
                </form>
            </div>
        </div>
        <div class="h-[1px] w-full bg-gray-300 my-8"></div>
        <div class="w-full grid grid-cols-2 grid-rows-3 md:grid-cols-5 md:grid-rows-1 text-black dark:text-white md:mb-10 gap-3">
            <div class="flex flex-col">
                <h1 class="font-bold mb-3">{m.nav_link_product()}</h1>
                <div class="flex flex-col gap-1 text-gray-600">
                    <a href="/#features" aria-label={m.nav_link_product()}>{m.nav_link_product()}</a>
                    <a href="/pricing#plan" aria-label={m.nav_link_pricing()}>{m.nav_link_pricing()}</a>
                    <a href="/#faq" aria-label={m.nav_link_faq()}>{m.nav_link_faq()}</a>
                </div>
            </div>
            <div class="flex flex-col">
                <h1 class="font-bold mb-3">{m.nav_link_features()}</h1>
                <div class="flex flex-col gap-1 text-gray-600">
                    <a href="/#difference" aria-label={m.nav_link_features()}>Difference</a>
                    <h2>2</h2>
                </div>
            </div>
            <div class="flex flex-col">
                <h1 class="font-bold mb-3">Company</h1>
                <div class="flex flex-col gap-1 text-gray-600">
                    <a href="/about" aria-label="Careers">About</a>
                    <a href="/about#founders" aria-label={m.nav_link_about()}>Founders</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
            <div class="flex flex-col">
                <h1 class="font-bold mb-3">{m.nav_link_community()}</h1>
                <div class="flex flex-col gap-1 text-gray-600">
                    <a href="https://discord.gg/myBMaaDeQu" rel="noopener noreferrer" target="_blank">Discord</a>
                    <a href="https://github.com/axonotes/AxonotesCore" rel="noopener noreferrer" target="_blank">Github</a>
                </div>
            </div>
            <div class="flex flex-col">
                <h1 class="font-bold mb-3">Legal</h1>
                <div class="flex flex-col gap-1 text-gray-600">
                    <a href="/legal/imprint" aria-label={m.footer_link_imprint()}>{m.footer_link_imprint()}</a>
                    <a href="/legal/privacy-policy" aria-label={m.footer_link_privacyPolicy()}>{m.footer_link_privacyPolicy()}</a>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-gray-300 my-8"></div>
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