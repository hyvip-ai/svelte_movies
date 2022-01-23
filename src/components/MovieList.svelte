<script>
  import Loader from "./Loader.svelte";
  import MovieItem from "./MovieItem.svelte";
  export let movieData = [];
  export let loading = true
  export let filter = ''
</script>

{#if !loading}
  <div class="movieList">
    {#if movieData.length}
    {#each movieData as movie (movie.id)}
      <MovieItem {movie} />
    {/each}
    {:else}
      <h1>No Movies Present For {filter}</h1>
    {/if}
  </div>
{:else}
  <Loader />
{/if}

<style>
  .movieList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
