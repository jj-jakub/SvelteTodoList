<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    function onAddButtonClick() {
        let itemText = document.getElementById('itemTextInput').value
        document.getElementById('itemTextInput').value = ""

        dispatch('addButtonClick', {
            itemText: itemText
        })
    }
</script>

<div class="newListItemInput">
    <input id="itemTextInput">
    <button on:click={onAddButtonClick}>Add item</button>
</div>

<style>
    input, button {
        padding: 0 10px 0 10px;
        list-style-type: none;
        margin: 24px 0 0 32px;
        font-size: 18px;
        color: #555;
    }
</style>