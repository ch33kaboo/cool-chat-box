<script>
    import { invalid_attribute_name_character } from "svelte/internal";


  const generateRandomNum = async () => {
    let res = fetch('https://svelte.dev/tutorial/random-number')
    res = await (await res).text()
    return res
  }

  let number = generateRandomNum()

  let handleClick = (e) => {
    number = generateRandomNum()
    e.target.className += " cursor-not-allowed"
  }
</script>

<main class="h-screen flex flex-col justify-center items-center gap-4 text-center">
  <button class="btn btn-secondary" on:click="{(e) => {handleClick(e)}}">click me</button>
  {#await number}
    <button class="btn loading">loading</button>
  {:then data} 
  <h1>the generated number is: {data}</h1>
  {/await}

</main>

<style>

</style>