<script>
  import Nested from './lib/Nested.svelte'
</script>

<main class="h-screen flex flex-col gap-2 justify-center items-center">

<Nested on:click="{() => {console.log("workig")}}">hello there</Nested>

<button class="btn btn-accent" on:click="{() => {console.log("workig")}}">hello there</button>


</main>

<style>

</style>