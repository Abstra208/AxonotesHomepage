<script>
    import * as m from "$lib/paraglide/messages.js";
    const error = new URLSearchParams(window.location.search).get("error") ?? "";
</script>

<section class="flex flex-col justify-center items-center bg-surface-50 dark:bg-surface-900">
    <div>
        <h1>{m.subscribe_error_page_title()}</h1>
        <p>{m.subscribe_error_page_message({error: error})}</p>
    </div>
</section>