<script>
  import Nested from './lib/Nested.svelte'
  const dodo = async () => {
    let ha = await fetch('https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new')
    console.log(ha);
  }
  dodo()
  let name = 'somethingo'
  let props = []
  props = [...props, "miloudi"]
  props = [...props, "metal"]
  props = [...props,"69"]
  let classs = 'btn btn-primary'
  let string = '<h1>this is a string</h1>' 
  let number = 0
  const incNumber = () => {
    number ++
  }
  let numbers = []
  $: console.log(numbers);
  $: mult = (number % 3) == 0
  $: {
    number
    numbers = [...numbers, number]
  }
  $: double = number * 2
</script>

<main class="min-h-screen flex flex-col justify-around items-center" on:click="{incNumber}">
  <div class="{classs}">number {number}</div>
  <p>the double of that is: {double}</p>
  {#if number % 2 == 0}
  <Nested/>
  {:else}
  <Nested />
  {/if}
  {#if number % 3 == 0}
    <button class="btn btn-secondary">mult 3</button>
  {:else if number % 3 == 1}
  <button class="btn btn-secondary">one added</button>
  {:else}
  <button class="btn btn-secondary">two added</button>
  {/if}
  {#each props as prop }
    <h1>{prop}</h1>
  {/each}
</main>

<style>
</style>
