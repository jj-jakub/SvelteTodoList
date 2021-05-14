<script>
import ListContainer from "../list/ListContainer.svelte";

  import Tabs from "./Tabs.svelte";

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
  <Tabs {activeItem} {items} on:tabChangeEvent={tabChange}/>
  
  {#if activeItem === currentPollsName}
    <p>Current polls</p>
    <ListContainer/>
  {:else if activeItem === addNewPollName}
    <p>New poll</p>
    <ListContainer/>
  {:else}
    <p>Third page</p>
    <ListContainer/>
  {/if}
</div>

<style>

</style>