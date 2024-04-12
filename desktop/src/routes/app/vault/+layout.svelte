<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Routes } from '$lib/config';
	import ItemsPanel from '$components/layout/ItemsPanel.svelte';
	import { fetchFaviconFromURL } from '$lib/utils';
	import {Plus} from 'phosphor-svelte';

	const { vaultItems } = $page.data;
</script>

<ItemsPanel title="Vault">

	<!-- Add button -->
	<button slot="action-component" class="btn-add bounce-effect">
		<Plus size="20" />
	</button>

	<!-- Scrollable content -->
	{#each vaultItems as { name, url, id, tag } (id)}
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

	.btn-add {
		border: 2px solid var(--primary);
		color: var(--primary);
		border-radius: var(--rounded-4);
		height: 2.4rem;
		width: 2.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
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

	.flex-column {
		width: 100%;
	}

	.vault-item .container {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.vault-item .container > .tag {
		padding: var(--spacing-4) var(--spacing-8);
		font-size: 10px;
		border-radius: var(--rounded-4);
		font-family: var(--font-mono);
		background-color: rgba(0, 255, 0, 0.25);
	}

	.url {
		width: 100%;
		text-align: left;
		font-size: var(--font-12);
		color: var(--primary);
	}

	.vault-item.active {
		background-color: rgba(255, 255, 255, 0.1);
	}
</style>
