<script>

  $: foods = []
  const handleChange = (e) => {
    e.target.checked ? foods = [...foods, e.target.value] : foods = foods.filter(data => data != e.target.value)
  }
</script>

<main class="flex flex-col items-center justify-center gap-2">
  <div class="flex items-center justify-start gap-1">
    <input on:change="{(e) => {handleChange(e)}}" type="checkbox" value="potato" >
    <h1>potato</h1>
  </div>
  <div class="flex items-center justify-start gap-1">
    <input on:change="{(e) => {handleChange(e)}}" type="checkbox" value="carrot" >
    <h1>carrot</h1>
  </div>
  <div class="flex items-center justify-start gap-1">
    <input on:change="{(e) => {handleChange(e)}}" type="checkbox" value="banana" >
    <h1>banana</h1>
  </div>
  <div class="flex items-center justify-start gap-1">
    <input on:change="{(e) => {handleChange(e)}}" type="checkbox" value="apple" >
    <h1>apple</h1>
  </div>
  <div class="flex items-center justify-start gap-1">
    <input on:change="{(e) => {handleChange(e)}}" type="checkbox" value="orange" >
    <h1>orange</h1>
  </div>

  <div class="mt-10 flex flex-col items-center justify-center gap-2">
    {#each foods as food}
      <h1>{food}</h1>
    {/each}
  </div>
</main>

<style>

</style>