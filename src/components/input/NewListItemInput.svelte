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
    .newListItemInput {
        vertical-align: bottom;
        margin-top: 200px;
    }
    button {
        margin-left: 10px;
    }
</style>