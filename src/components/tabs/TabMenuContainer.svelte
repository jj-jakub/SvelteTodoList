<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    export let activeItem;
    export let tabItems;

</script>

<div class="tabs">
    <ul>
        {#each tabItems as item}
            <li on:click={() => dispatch('tabChangeEvent', item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>