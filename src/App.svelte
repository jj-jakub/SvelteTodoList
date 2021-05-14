<script>
	export let name;
import TabContainer from './components/tabs/TabContainer.svelte';
	import './theme/app.css'
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<TabContainer/>
</main>
