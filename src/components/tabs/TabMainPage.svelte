<script>
  import Constants from '../constants/Constants'

  import TabMenuContainer from "./TabMenuContainer.svelte";
  import TabItem from "./TabItem.svelte";

  let tabItems = [Constants.allItemsTabName, Constants.finishedItemsTabName, Constants.todoItemsTabName];
  let activeItem = Constants.allItemsTabName;

  const tabChange = (e) => {
    activeItem = e.detail;
  }
</script>

<div>
  <TabMenuContainer {activeItem} {tabItems} on:tabChangeEvent={tabChange}/>

  <TabItem {activeItem}/>
</div>

<style>

</style>