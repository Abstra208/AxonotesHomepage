<script>
    import { page } from "$app/stores";
    import * as m from "$lib/paraglide/messages.js";

    $: id = $page.url.searchParams.get('id');
    $: email = $page.url.searchParams.get('email');
</script>

<div class="w-full flex justify-center px-4">
    <div class="w-full max-w-5xl">
        {#if id || email}
            <div>
                <h1>{m.unsubscribe_page_title()}</h1>
            </div>
            <form method="post" action="/unsubscribe/post">
                <input type="hidden" name="id" value={id} />
                <input type="hidden" name="email" value={email} />
                <button type="submit">{m.unsubscribe_page_cta()}</button>
            </form>
        {:else}
            <div>
                <h1>{m.unsubscribe_page_title()}</h1>
            </div>
            <form method="post" action="/unsubscribe/post">
                <input type="email" name="email" value={email} />
                <button type="submit">{m.unsubscribe_page_cta()}</button>
            </form>
        {/if}
    </div>
</div>