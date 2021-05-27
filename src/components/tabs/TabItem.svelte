<script>
    import FinishedItemsListContainer from "../list/FinishedItemsListContainer.svelte";

    import AllListContainer from "../list/AllListContainer.svelte";
    import TodoItemsListContainer from "../list/TodoItemsListContainer.svelte";
    import NewListItemInput from "../input/NewListItemInput.svelte";

    import Constants from '../constants/Constants'

    export let activeItem;

    let childComponent;

    const onAddNewItemButtonClick = (e) => {
        addListItem(e.detail.itemText)
    }

    async function addListItem(itemText) {
        const res = await fetch(Constants.serverAddress + Constants.getTodosEndpoint, { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "text": itemText
            })
        })
        const text = await res.text()
    
        childComponent.refresh()

        if (res.ok) {
            promiseItems = text
        } else {
            throw new Error(text)
        }
    }

    let promiseItems = [];
</script>

<div>
    {#if activeItem == Constants.allItemsTabName}
        <AllListContainer bind:this="{childComponent}"/>
    {:else if activeItem == Constants.finishedItemsTabName}
        <FinishedItemsListContainer bind:this="{childComponent}"/>
    {:else}
        <TodoItemsListContainer bind:this="{childComponent}"/>
    {/if}

    <NewListItemInput on:addButtonClick={onAddNewItemButtonClick}/>
</div>
