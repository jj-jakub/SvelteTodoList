<script>
  import TabMenuContainer from "./TabMenuContainer.svelte";
  import TabItem from "./TabItem.svelte";

  let currentPollsName = 'Current polls';
  let addNewPollName = 'Add New Poll';
  let thirdPageName = 'Third page'

  let tabItems = [currentPollsName, addNewPollName, thirdPageName];
  let activeItem = currentPollsName;

  const tabChange = (e) => {
    activeItem = e.detail;
  }
</script>

<div>
  <TabMenuContainer {activeItem} {tabItems} on:tabChangeEvent={tabChange}/>

  {#if activeItem === currentPollsName}
    <p>Current polls</p>
    <TabItem tabItemNumber=0/>
  {:else if activeItem === addNewPollName}
    <p>New poll</p>
    <TabItem tabItemNumber=1/>
  {:else}
    <p>Third page</p>
    <TabItem tabItemNumber=2/>
  {/if}
</div>

<style>

</style>