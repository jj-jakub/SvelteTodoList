<script>
    import ListItem from "./ListItem.svelte";
    import { getAllItems, updateListItem, deleteListItem } from "../server/ServerTodoUpdateMethods";

    let promiseItems = getAllItems();

    const listItemClick = (e) => {
        promiseItems = updateListItem(e.detail.elementNumber, e.detail.checked, promiseItems)
    }

    const onDeleteListItemClick = (e) => {
        promiseItems = deleteListItem(e.detail.elementNumber, promiseItems)
    }

    export function refresh() {
        promiseItems = getAllItems()
    }
</script>

{#await promiseItems}
    <p>Waiting for server response</p>
{:then items}
    {#each JSON.parse(items) as item, i}
        {#if item.done === false}
            <li>
                <ListItem contentText={item.text} elementNumber={i} isChecked={item.done} on:listItemClick={listItemClick} on:deleteListItemClick={onDeleteListItemClick}/>
            </li>
        {/if}
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}