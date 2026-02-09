<script lang="ts">
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

    if (typeof document !== "undefined")
    document.addEventListener("click", (event) => {
        const path = event.composedPath();
        const isClickInside = path.some(
            (el) =>
                el instanceof HTMLElement &&
                el.classList.contains("language-switcher")
        );
        if (!isClickInside) {
            open = false;
        }
    });
</script>

<div class="relative flex flex-col gap-1 w-[80vw] md:w-50 text-base md:text-xs language-switcher">
    <button
        type="button"
        class="w-full py-2 md:py-3 border-1 border-gray-600 bg-white dark:bg-surface-800 rounded-2xl flex flex-row items-center justify-between px-6 gap-2"
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
    <div class="w-full absolute top-14 border-1 border-gray-600 bg-white dark:bg-surface-800 rounded-2xl flex flex-col overflow-hidden transition-opacity duration-200 {open ? 'opacity-100 block z-40' : 'opacity-0 pointer-events-none -z-10'}">
        {#each availableLanguageTags as lang}
            {@const details = languageDetails[lang] || {
                name: lang.toUpperCase(),
                short: "🌐",
            }}
            {@const isActive = lang === languageTag()}
            <li class="list-none hover:bg-gray-200 dark:hover:bg-surface-700">
                <a
                    href={i18n.route(page.url.pathname)}
                    hreflang={lang}
                    class="text-surface-900-100 rounded-md py-2 md:py-3 duration-200 flex flex-row items-center justify-around pl-6"
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