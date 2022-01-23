<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    const changeHandler = (e)=>{
        dispatch("filter-movies",e.target.value)
    }
</script>

<input type="text" placeholder="Search Movie" on:input={changeHandler}>

<style>
    input{
        display: block;
        width: 80%;
        outline: none;
        font-size: 1rem;
        margin: 15px auto;
    }
</style>