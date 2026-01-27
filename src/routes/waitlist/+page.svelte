<script>
    import * as m from "$lib/paraglide/messages.js";
</script>

<div class="container w-screen max-w-none flex flex-col justify-center items-center">
    <h1
        class="text-primary-600 dark:text-primary-400 mb-4 leading-tight font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl"
    >
        {m.home_finalCta_button()}
    </h1>
    <div>
        <p>{m.home_finalCta_description()}</p>
        <button class="btn rounded-3xl">{m.home_finalCta_soon_button()}</button>
    </div>
</div>