<script>
    import { browser } from '$app/environment';
    import * as m from "$lib/paraglide/messages.js";
    export let action = "/subscribe";

    let lang = 'en';

    if (browser) {
        const pathLang = window.location.pathname.split('/').filter(Boolean)[0];
        lang = pathLang || navigator.language || 'en';
    }
</script>

<form action={action} method="POST" class="flex gap-2 mt-4">
    <input
        type="email"
        name="email"
        id="email"
        class="md:w-[23vw] rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        placeholder={m.footer_email_input()}
        required
    >
    <input type="hidden" name="lang" value={lang}>
    <button
        type="submit"
        class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:outline-none"
    >
        {m.footer_subscribe_button()}
    </button>
</form>