<script lang="ts">
	export let title: string;
</script>

<section class="items-panel flex-column">
	<!-- Top section -->
	<section class="top-section">
		<!-- Tittle and action component -->
		<div class="container">
			<span class="title">{title}</span>
			<slot name="action-component" />
		</div>

		<!-- TODO: Add Searchbar -->
	</section>

	<!-- Divider -->
	<div class="divider" />

	<!-- Scrollable container -->
	<div class="scrollable-container flex-column"><slot /></div>
</section>

<style>
	.items-panel {
		width: var(--items-panel-size);
		border-right: 1px solid var(--border);
		flex-shrink: 0;
		overflow: hidden;
	}

	.scrollable-container,
	.top-section {
		padding: var(--spacing-16);
	}

	.top-section > .container {
		display: flex;
		justify-content: space-between;
	}

	.top-section > .container > .title {
		font-size: var(--font-24);
		font-weight: 600;
	}

	.scrollable-container {
		overflow-y: scroll;
		gap: var(--spacing-16);
	}
</style>
