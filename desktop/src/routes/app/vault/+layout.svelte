<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import ItemsPanel from '$components/layout/ItemsPanel.svelte';
	import { Routes } from '$lib/config';
	import { fetchFaviconFromURL } from '$lib/utils';
	import { onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

	const { vaultItems } = $page.data as PageData;

	let filteredVaultItems = vaultItems;

	let searchTerm = writable('');

	// when search term changes
	let unsubscribe = searchTerm.subscribe((value) => {
		if (value.trim() === '') {
			filteredVaultItems = vaultItems;
			return;
		}

		const term = value.toLowerCase().trim();

		// filter and assign the items
		filteredVaultItems = vaultItems.filter(
			(item) =>
				// if name has the term
				item.name.toLowerCase().includes(term) ||
				// if tag exists and tag has the term
				item.tag?.toLowerCase().includes(term)
		);
	});

	onDestroy(unsubscribe);
</script>

<ItemsPanel bind:searchTerm={$searchTerm} title="Vault">
	<!-- Add button -->
	<button slot="action-component" class="btn-add bounce-effect"> Add New </button>

	<!-- Scrollable content -->
	{#each filteredVaultItems as { name, url, id, tag } (id)}
		<button
			class="vault-item"
			class:active={$page.params.id === id}
			on:mousedown={() => goto(`${Routes.APP_VAULT}/${id}`)}
		>
			<img src={fetchFaviconFromURL(url, 32)} alt="{name}'s Logo" />

			<div class="flex-column">
				<!-- Title container -->
				<div class="container">
					<span class="name">{name}</span>

					<!-- TODO: Implement Better UI & system for tags -->

					{#if tag}
						<span data-tag={tag} class="tag">{tag}</span>
					{/if}
				</div>

				<p class="url">{url}</p>
			</div>
		</button>
	{/each}
</ItemsPanel>

<slot />

<style>
	.btn-add,
	.vault-item .container > .tag {
		padding: var(--spacing-4) var(--spacing-8);
		border-radius: var(--rounded-4);
	}

	.btn-add {
		background-color: var(--primary-hsl);
		color: var(--bg);
		font-size: var(--font-12);
		font-weight: 800;
		max-height: 2.4rem;
	}

	.vault-item {
		display: flex;
		border-radius: var(--rounded-4);
		padding: var(--spacing-8);
		align-items: center;
		gap: var(--spacing-8);
	}

	.vault-item > img {
		border-radius: var(--rounded-8);
	}

	.flex-column,
	.url {
		width: 100%;
	}

	.vault-item .container {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.vault-item .container > .tag {
		font-size: 10px;
		font-family: var(--font-mono);
		background-color: rgba(0, 255, 0, 0.25);
	}

	.url {
		text-align: left;
		font-size: var(--font-12);
		color: var(--primary-hsl);
	}

	.vault-item.active {
		background-color: rgba(255, 255, 255, 0.1);
	}
</style>
