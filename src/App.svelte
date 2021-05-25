<script>
import TabMainPage from './components/tabs/TabMainPage.svelte';

import CardContainer from './components/tabs/TabMainPage.svelte';

	export let name;
	import './theme/app.css'
</script>

<main>
	<h1>Hello {name}!</h1>

	<TabMainPage/>
</main>
