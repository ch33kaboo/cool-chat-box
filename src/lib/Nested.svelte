<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()

    const handleClick = () => {
        dispatch('click')
    }
</script>

<main>
    <div  class="btn btn-primary" on:click={handleClick}>click me</div>
</main>

<style>

</style>