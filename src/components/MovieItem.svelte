<script>
import Star from "./Star.svelte";


  export let movie = {};
</script>

<div class="card" style="width: 18rem;">
  <img src={movie.medium_cover_image} class="card-img-top" alt={movie.imdb_code} />
  <div class="card-body">
    <p><Star />{movie.rating}</p>
    <h5 class="card-title">{movie.title_english} ({movie.year})</h5>
    <p class="card-text">
      {movie.summary.split('.')[0] + ' ' + movie.summary.split('.')[1]}.
    </p>
  </div>
</div>
<style>
    .card{
        margin: 20px;
    }
</style>