<script lang="ts">
    import {ParaglideJS} from "@inlang/paraglide-sveltekit";
    import {i18n} from "$lib/i18n";
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import {onMount} from "svelte";
    import {browser} from "$app/environment";

    const {children} = $props();

    onMount(() => {
        if (browser) {
            const script = document.createElement("script");
            script.defer = true;
            script.setAttribute("data-domain", window.location.hostname);
            script.src =
                "https://plausible.axonotes.ch/js/script.outbound-links.js";
            document.head.appendChild(script);
        }
    });
</script>

<ParaglideJS {i18n}>
    <div class="bg-surface-50 dark:bg-surface-950 flex min-h-screen w-screen flex-col pt-26 md:pt-30">
        <Navbar />
        <main id="main-content" class="flex-1 pb-20">
            {@render children()}
        </main>
        <Footer />
    </div>
</ParaglideJS>
