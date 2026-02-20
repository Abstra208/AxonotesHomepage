<script>
    import * as m from "$lib/paraglide/messages.js";
    const error = new URLSearchParams(window.location.search).get("error") ?? "";
</script>

<div class="w-full flex justify-center px-4">
    <div class="w-full max-w-5xl">
        <h1>{m.subscribe_error_page_title()}</h1>
        <p>{m.subscribe_error_page_message({error: error})}</p>
    </div>
</div>