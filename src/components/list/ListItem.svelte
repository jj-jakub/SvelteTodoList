<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    export let elementNumber;
    export let contentText;
    export let isChecked;

    function onListItemClick() { 
        isChecked = !isChecked
       
        dispatch('listItemClick', {
			elementNumber: elementNumber,
            checked: isChecked
		})
    }

    function onDeleteListItemClick() {
        dispatch('deleteListItemClick', {
            elementNumber: elementNumber
        })
    }
</script>

<div class="listitem">
    <input on:click={onListItemClick} type=checkbox checked={isChecked}>
    
    <p>{contentText}</p>
    
    <button on:click={onDeleteListItemClick}>Delete</button>
</div>

<style>
    .listitem, input, p, button {
        display: flex;
        justify-content: center;
        padding: 0 10px 0 10px;
        list-style-type: none;
        margin: 24px 0 0 32px;
        font-size: 18px;
        color: #555;
    }
</style>