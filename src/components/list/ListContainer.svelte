<script>
    import ListItem from "./ListItem.svelte";

    export let containerNumber;

    let itemsAmount = 3; //TODO Calculate it from store

    const listItemClick = (e) => {
        let elementNumber = e.detail.elementNumber;
        let isChecked = e.detail.checked;
        
        let contentText = getContentText(elementNumber)
        items[containerNumber][elementNumber] = {contentText: contentText, isChecked: isChecked}
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
            <ListItem contentText={getContentText(i)} elementNumber={i} isChecked={getIsChecked(i)} on:listItemClick={listItemClick}/>
        </li>
    {/each}
</div>

<style>
    li {
        list-style-type: none;
    }
</style>