<script>
    export let elementNumber = -1;
</script>

<div class="listitem">
    <input class="listitem" type=checkbox checked={false}>
    <p class="listitem">{elementNumber}</p>
    <img class="listitem" src={"a"} alt={"Trash image"}>
</div>

<style>
    .listitem {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
        margin: 24px 0 0 32px;
        font-size: 18px;
        color: #555;
    }
</style>