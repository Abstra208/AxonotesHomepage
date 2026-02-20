<script>
    import * as m from "$lib/paraglide/messages.js";
    import Newsletter from "$lib/components/newsletter.svelte";
    import Badge from "$lib/components/badge.svelte";
</script>

<div class="w-full flex justify-center px-4">
    <div class="w-full max-w-6xl flex flex-col items-center">
        <Badge />
        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 leading-tight font-bold sm:mb-6 text-3xl md:text-4xl lg:text-5xl"
        >
            {m.home_finalCta_button()}
        </h1>
        <h2>{m.home_finalCta_description()}</h2>
        <Newsletter action="subscribe"/>
    </div>
</div>