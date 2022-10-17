<script>
    export let message
    import { createEventDispatcher } from "svelte";

    let e

    const dispatch = createEventDispatcher()

    const editMessage = (e) => {
        e.target.parentNode.parentNode.blur()
        dispatch("editMessage")
    }

    const deleteMessage = (e) => {
        e.target.parentNode.parentNode.blur()
        dispatch("deleteMessage")
    }

</script>
<!-- svelte-ignore empty-block -->
{#if message.user == -1}
    
{:else}
    <div bind:this={e} data-aos="fade-{message.user == `2` ? "left" : "right" }" class="{message.user == `1` ? "self-start" : "self-end" } max-w-lg">
        <div class="flex items-center justify-center {message.user == `2` ? "flex-row-reverse" : "" }">
            <div class="overflow-x-auto {message.user == `2` ? "bg-pink-500" : "bg-yellow-500" } px-3 py-1 rounded-2xl text-white bg-opacity-60">
                {message.msg}
            </div>
            <div class="select-none cursor-pointer hover:text-white dropdown {message.user == `2` ? "dropdown-left" : "dropdown-right" } dropdown-end">
                <div tabindex="0" class="{message.user == `1` ? "rotate-90 ml-2" : "-rotate-90 mr-2" }">&#8230;</div>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[167px]">
                    <li><div on:click={e => editMessage(e)}>edit message</div></li>
                    <li><div on:click={e => deleteMessage(e)}>delete message</div></li>
                </ul>
                
            </div>
        </div>
    </div>
{/if}
