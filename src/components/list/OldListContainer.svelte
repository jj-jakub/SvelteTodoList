<script>
    import ListItem from "./ListItem.svelte";

    export let containerNumber;

    $: itemsAmount = 3; //TODO Calculate it from store

    const listItemClick = (e) => {
        let elementNumber = e.detail.elementNumber;
        let isChecked = e.detail.checked;
        
        let contentText = getContentText(elementNumber)
        items[containerNumber][elementNumber] = {contentText: contentText, isChecked: isChecked}
    }

    const deleteListItemClick = (e) => {
        let elementNumber = e.detail.elementNumber;
        delete items[containerNumber][elementNumber]
        items = [...items, items - 1]
        itemsAmount--
    }

    function getIsChecked(index) {
        return index in items[containerNumber] ? (items[containerNumber][index].isChecked || false) : false
    }

    function getContentText(index) {
        return index in items[containerNumber] ? (items[containerNumber][index].contentText || "Text not found") : "Text not found"
    }

    import ListStore from "../stores/ListStore";
    let items = [];
    ListStore.subscribe(data => {
        items = data
    })
    
</script>

<div class="container">
    {#each {length: itemsAmount} as _, i}
        <li>
            <ListItem contentText={getContentText(i)} elementNumber={i} isChecked={getIsChecked(i)} on:listItemClick={listItemClick} on:deleteListItemClick={deleteListItemClick}/>
        </li>
    {/each}
</div>

<style>
    li {
        list-style-type: none;
    }
</style>