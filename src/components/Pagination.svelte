<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    export let max = 0  
    export let page = 0
    let valArray = [...Array(max).keys()]
    const handleClick = (data) =>{
        dispatch('change-page',data)
    }
</script>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    {#each valArray as link}
    <li class={`page-item ${link+1 === page?'active':''}`}><span class="page-link" on:click={()=>handleClick(link+1)}>{link+1}</span></li>
    {/each}

  </ul>
</nav>

<style>
.pagination{
    justify-content: center;
}
nav{
    padding-bottom: 20px;
}
ul li{
  cursor: pointer;
}
</style>