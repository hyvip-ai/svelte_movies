<script>
  import { onMount } from "svelte";
  import MovieList from "./components/MovieList.svelte";
  import Pagination from "./components/Pagination.svelte";
  import SearchMovie from "./components/SearchMovie.svelte";
  import { fetchDataToShow } from "./functions/fetchDataWithPage";
  import { filterMovie } from "./functions/filterMovie";
  let page = 1;
  let max = 20;
  let movieData = [];
  let filterData = [];
  let filter = "";
  let loading = true;
  onMount(async () => {
    fetchDataToShow(page).then((data) => {
      movieData = [...data];
      filterData = filterMovie(movieData, filter);
      loading = false;
    });
  });
  const changePage = (e) => {
    loading = true;
    page = e.detail;
    movieData = [];
    fetchDataToShow(page).then((data) => {
      movieData = [...data];
      filterData = filterMovie(movieData, filter);
      loading = false;
    });
  };
  const changeFilter = (e) => {
    filter = e.detail;
    filterData = filterMovie(movieData, filter);
  };
</script>

<main>
  <h1>List Of Good Movies</h1>
  <SearchMovie on:filter-movies={changeFilter} />
  {#key filterData}
    <MovieList {filter} movieData={filterData} {loading} />
  {/key}
</main>
<Pagination {max} {page} on:change-page={changePage} />

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
