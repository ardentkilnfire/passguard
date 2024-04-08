<script>
	import Sidebar from './Sidebar.svelte';
</script>

<div id="app">
	<!-- Sidebar -->
	<Sidebar />

	<!-- Content Area -->
	<main>
		<slot />
	</main>
</div>

<style>
	#app {
		height: calc(100vh - var(--titlebar-height));
		width: 100vw;
		display: flex;
	}

	main {
		flex-shrink: 0;
		width: 100%;
	}
</style>
