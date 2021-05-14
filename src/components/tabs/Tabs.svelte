<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();
    export const tabChangeEventName = 'tabChange'

    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => dispatch('tabChangeEvent', item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
    }
    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
        list-style-type: none;
    }
    .active {
        color: #d91b42;
        border-bottom: 2px solid;
        padding-bottom: 8px;
    }
</style>