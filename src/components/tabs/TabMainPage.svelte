<script>
  import TabMenuContainer from "./TabMenuContainer.svelte";
  import TabItem from "./TabItem.svelte";

  let allItemsTabName = 'All items';
  let finishedItemsTabName = 'Finished items';
  let todoItemsTabName = 'TODO'

  let tabItems = [allItemsTabName, finishedItemsTabName, todoItemsTabName];
  let activeItem = allItemsTabName;

  const tabChange = (e) => {
    activeItem = e.detail;
  }
</script>

<div>
  <TabMenuContainer {activeItem} {tabItems} on:tabChangeEvent={tabChange}/>

  {#if activeItem === allItemsTabName}
    <p>Current polls</p>
    <TabItem tabItemNumber=0/>
  {:else if activeItem === finishedItemsTabName}
    <p>New poll</p>
    <TabItem tabItemNumber=1/>
  {:else}
    <p>Third page</p>
    <TabItem tabItemNumber=2/>
  {/if}
</div>

<style>

</style>