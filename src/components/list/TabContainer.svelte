<script>
    import ListItem from "./ListItem.svelte";
    import ListStore from "../stores/ListStore";
    let itemsAmount = 10;
    let items = [];
    ListStore.subscribe(data => {
        items = data
    })

    function getIsChecked(index) {
        return index in items ? (items[index].check || false) : false
    }

    const listItemClick = (e) => {
        let elementNumber = e.detail.elementNumber;
        let isChecked = e.detail.checked;
        items[elementNumber] = {check: isChecked}
        alert(elementNumber + " // " + isChecked)
    }
</script>

<div class="container">
    {#each {length: itemsAmount} as _, i}
        <li>
            <ListItem elementNumber={i} isChecked={getIsChecked(i)} on:listItemClick={listItemClick}/>
        </li>
    {/each}
</div>

<style>
    li {
        list-style-type: none;
    }
</style>