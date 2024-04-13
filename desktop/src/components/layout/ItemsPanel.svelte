<script lang="ts">
	import { MagnifyingGlass } from 'phosphor-svelte';

	export let title: string;

	// importer can bind this value to listen changes in search term
	export let searchTerm: string = "";

</script>

<section class="items-panel flex-column">
	<!-- Top section -->
	<section class="top-section flex-column">
		<!-- Tittle and action component -->
		<div class="container">
			<span>{title}</span>
			<slot name="action-component" />
		</div>

		<!-- TODO: Implement Search Logic -->
		<div class="searchbar">
			<MagnifyingGlass size="16" />
			<input bind:value={searchTerm} type="text" placeholder="Search by name or tag . . ." />
		</div>
	</section>

	<!-- Divider -->
	<div class="divider" />

	<!-- Scrollable container -->
	<div class="scrollable-container flex-column">
		<slot />
	</div>
</section>

<style>
	.items-panel {
		width: var(--items-panel-size);
		border-right: 1px solid var(--border);
		flex-shrink: 0;
		overflow: hidden;
		background-color: var(--bg-surface);
	}

	.scrollable-container,
	.top-section {
		padding: var(--spacing-16);
	}

	.top-section {
		gap: var(--spacing-16);
	}

	.top-section > .container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.top-section > .container > span {
		font-size: var(--font-24);
		font-weight: 600;
	}

	.searchbar {
		height: 3.2rem;
		border-radius: var(--rounded-4);
		overflow: hidden;
		background-color: var(--bg);
		color: #95a7b1;
		display: flex;
		align-items: center;
		padding: 0 var(--spacing-8);
		border: 1px solid var(--border);
	}

	.searchbar > input {
		height: 100%;
		width: 100%;
		padding: var(--spacing-8);
		background-color: transparent;
		font-size: var(--font-12);
		font-weight: 600;
	}

	.searchbar > input::placeholder {
		font-weight: 600;
		color: rgba(149, 167, 177, 0.5);
	}

	.scrollable-container {
		overflow-y: scroll;
		gap: var(--spacing-16);
	}
</style>
