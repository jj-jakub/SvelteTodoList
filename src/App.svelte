<script>
import CardContainer from './components/tabs/CardContainer.svelte';

	export let name;
	import './theme/app.css'
</script>

<main>
	<h1>Hello {name}!</h1>

	<CardContainer/>
</main>
