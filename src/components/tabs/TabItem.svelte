<script>
    import FinishedItemsListContainer from "../list/FinishedItemsListContainer.svelte";

    import AllListContainer from "../list/AllListContainer.svelte";
    import TodoItemsListContainer from "../list/TodoItemsListContainer.svelte";

    export let tabItemNumber;
</script>

<div>
    {#if tabItemNumber == 0}
        <AllListContainer containerNumber={tabItemNumber}/>
    {:else if tabItemNumber == 1}
        <FinishedItemsListContainer containerNumber={tabItemNumber}/>
    {:else}
        <TodoItemsListContainer containerNumber={tabItemNumber}/>
    {/if}
</div>