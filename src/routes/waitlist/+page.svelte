<script>
    import * as m from "$lib/paraglide/messages.js";
    import Newsletter from "$lib/components/newsletter.svelte";
</script>

<div class="w-full flex justify-center px-4 sm:px-12 lg:px-25">
    <div class="w-full max-w-6xl">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 leading-tight font-bold sm:mb-6 text-3xl md:text-4xl lg:text-5xl"
        >
            {m.home_finalCta_button()}
        </h1>
        <div>
            <h2>{m.home_finalCta_description()}</h2>
            <p>{m.home_finalCta_soon_button()}</p>
        </div>
        <Newsletter action="subscribe"/>
    </div>
</div>