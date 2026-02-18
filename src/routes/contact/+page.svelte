<script>
    import * as m from "$lib/paraglide/messages.js";
</script>

<div class="w-full flex justify-center px-4 sm:px-12 lg:px-25">
    <div class="w-full max-w-6xl">
        <section>
            <h1
                class="text-primary-600 dark:text-primary-400 mb-5 w-full text-center leading-9 md:leading-12 font-bold text-2xl md:text-5xl"
            >
                {m.contact_page_title()}
            </h1>
            <div>
                <h2>{m.contact_page_description()}</h2>
                <p>{m.contact_page_email()}: <a href="mailto:contact@axonotes.com">contact@axonotes.com</a></p>
            </div>
        </section>
    </div>
</div>