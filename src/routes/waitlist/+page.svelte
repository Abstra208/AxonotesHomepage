<script>
    import * as m from "$lib/paraglide/messages.js";
</script>

<div class="w-full flex justify-center px-4 sm:px-12 lg:px-25">
    <div class="w-full max-w-6xl">
        <h1
            class="text-primary-600 dark:text-primary-400 mb-4 leading-tight font-bold sm:mb-6 text-3xl md:text-4xl lg:text-5xl"
        >
            {m.home_finalCta_button()}
        </h1>
        <div>
            <p>{m.home_finalCta_description()}</p>
            <button class="btn rounded-3xl">{m.home_finalCta_soon_button()}</button>
        </div>
    </div>
</div>