<script lang="ts">
    import {Popover} from "@skeletonlabs/skeleton-svelte";
    import {page} from "$app/state";
    import {
        availableLanguageTags,
        languageTag,
    } from "$lib/paraglide/runtime.js";
    import {i18n} from "$lib/i18n.js";
    import {Globe, ChevronDown, ChevronUp} from "@lucide/svelte";

    let open = $state(false);

    const languageDetails: Record<string, {name: string; short: string}> = {
        en: {name: "English", short: "en"},
        de: {name: "Deutsch", short: "de"},
        fr: {name: "Français", short: "fr"},
    };

    function closePopover() {
        open = false;
    }
</script>



<div class="relative flex flex-col gap-1">
    <button
        type="button"
        class="w-50 py-3 border-1 border-gray-600 rounded-2xl flex flex-row items-center justify-around gap-2"
        onclick={() => (open = !open)}
        aria-expanded={open}
    >
        {languageDetails[languageTag()].name}
        {#if open}
            <ChevronUp />
        {:else}
            <ChevronDown />
        {/if}
    </button>
    <div class="w-50 border-1 border-gray-600 rounded-2xl flex flex-col overflow-hidden {open ? "flex" : "hidden"}">
        {#each availableLanguageTags as lang}
            {@const details = languageDetails[lang] || {
                name: lang.toUpperCase(),
                short: "🌐",
            }}
            {@const isActive = lang === languageTag()}
            <li class="list-none hover:bg-primary-100-900">
                <a
                    href={i18n.route(page.url.pathname)}
                    hreflang={lang}
                    class="text-surface-900-100 rounded-md py-3 duration-200 flex flex-row items-center justify-around"
                    onclick={closePopover}
                    rel="alternate"
                    aria-current={isActive ? "page" : undefined}
                >
                    <span class="flex-auto text-start"
                        >{details.name}</span
                    >
                    <ChevronDown class="opacity-0" />
                </a>
            </li>
        {/each}
    </div>
</div>