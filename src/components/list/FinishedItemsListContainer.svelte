<script>
    import ListItem from "./ListItem.svelte";

    const serverAddress = "http://localhost:4000"
    const getTodosEndpoint = "/api/todos"
    const deleteItemEndpoint = "/api/todos/"

    let promiseItems = getAllItems();

    const listItemClick = (e) => {
        updateListItem(e.detail.elementNumber, e.detail.checked)
    }

    const onDeleteListItemClick = (e) => {
        deleteListItem(e.detail.elementNumber)
    }

    export function refresh() {
        promiseItems = getAllItems()
    }

    async function deleteListItem(itemId) {
        let objectId = await getItemObjectId(itemId)
        const res = await fetch(serverAddress + deleteItemEndpoint + objectId, { method: 'DELETE' })
        const text = await res.text()
    
        if (res.ok) {
            promiseItems = text
        } else {
            throw new Error(text)
        }
    }

    async function updateListItem(itemId, checked) {
        let objectId = await getItemObjectId(itemId)
        const res = await fetch(serverAddress + getTodosEndpoint, { method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "_id": objectId,
                "done": checked
            }) 
        })
        const text = await res.text()

        if (res.ok) {
            promiseItems = text
        } else {
            throw new Error(text)
        }
    }

    async function getItemObjectId(itemNumber) {
        let objectId = JSON.parse(await promiseItems)[itemNumber]._id
        return objectId
    }

    async function getAllItems() {
        const res = await fetch(serverAddress + getTodosEndpoint)
        const text = await res.text()
    
        if (res.ok) {
            return text
        } else {
            throw new Error(text)
        }
    }
</script>

{#await promiseItems}
    <p>Waiting for server response</p>
{:then items}
    {#each JSON.parse(items) as item, i}
        {#if item.done === true}
            <li>
                <ListItem contentText={item.text} elementNumber={i} isChecked={item.done} on:listItemClick={listItemClick} on:deleteListItemClick={onDeleteListItemClick}/>
            </li>
        {/if}
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<style>
    li {
        list-style-type: none;
    }
</style>