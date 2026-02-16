<script>
    import * as m from "$lib/paraglide/messages.js";
    export let text = m.home_hero_badge_text?.() ?? "New";
</script>

<a href="/#" class="mb-8 inline-block" aria-label={text}>
    <span class="relative inline-flex overflow-hidden rounded-full p-[2px]">
        <span
            aria-hidden="true"
            class="absolute inset-[-30%] rounded-full bg-[conic-gradient(#c7d2fe,#f5d0fe,#fee2e2,#c7d2fe)] opacity-80 blur-[3px] animate-[spin_8s_linear_infinite]"
        ></span>
        <span class="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-surface-50 via-white to-surface-50 dark:from-surface-900 dark:via-surface-950 dark:to-surface-900 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-200 shadow-sm">
            <span class="h-1.5 w-1.5 rounded-full bg-primary-500 dark:bg-primary-200 animate-ping"></span>
            {text}
        </span>
    </span>
</a>