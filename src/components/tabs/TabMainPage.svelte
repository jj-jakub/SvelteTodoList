<script>
import TabContainer from "../list/TabContainer.svelte";

import ListContainer from "../list/TabContainer.svelte";
import TabMenuContainer from "./TabMenuContainer.svelte";
import TabItem from "./TabMenuContainer.svelte";

  import Tabs from "./TabMenuContainer.svelte";

  let currentPollsName = 'Current polls';
  let addNewPollName = 'Add New Poll';
  let thirdPageName = 'Third page'

  let items = [currentPollsName, addNewPollName, thirdPageName];
  let activeItem = currentPollsName;

  const tabChange = (e) => {
    activeItem = e.detail;
  }
</script>

<div>
  <TabMenuContainer {activeItem} {items} on:tabChangeEvent={tabChange}/>
  
  {#if activeItem === currentPollsName}
    <p>Current polls</p>
    <TabContainer/>
  {:else if activeItem === addNewPollName}
    <p>New poll</p>
    <TabContainer/>
  {:else}
    <p>Third page</p>
    <TabContainer/>
  {/if}
</div>

<style>

</style>