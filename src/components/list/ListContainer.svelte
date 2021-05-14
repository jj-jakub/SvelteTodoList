<script>
    import ListItem from "./ListItem.svelte";

    let itemsAmount = 10;
</script>

<div class="container">
    {#each {length: itemsAmount} as _, i}
        <li>
            <ListItem elementNumber={i}/>
        </li>
    {/each}
</div>

<style>
    li {
        list-style-type: none;
    }
</style>