<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    export let elementNumber;
    export let contentText;
    export let isChecked = false;

    function onListItemClick() { 
        isChecked = !isChecked
       
        dispatch('listItemClick', {
			elementNumber: elementNumber,
            checked: isChecked
		})
    }
</script>

<div class="listitem">
    <input on:click={onListItemClick} class="listitem" type=checkbox checked={isChecked}>
    
    <p class="listitem">{contentText}</p>
    
    <button class="listitem">Delete</button>
</div>

<style>
    .listitem {
        display: flex;
        justify-content: center;
        padding: 0 10px 0 10px;
        list-style-type: none;
        margin: 24px 0 0 32px;
        font-size: 18px;
        color: #555;
    }
</style>