<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()

    const handleClick = () => {
        dispatch('click')
    }
</script>

<main on:click="{handleClick}" class="btn btn-accent">
    <slot></slot>
</main>

<style>

</style>