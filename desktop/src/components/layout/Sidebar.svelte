<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Routes } from '$lib/config';
	import { type NavItem } from '$lib/types';
	import { containsPath } from '$lib/utils';
	import { Gear, Heart, LockKey, Note, Trash, Vault } from 'phosphor-svelte';

	const navItems: NavItem[] = [
		{ name: 'Vault', path: Routes.APP_VAULT, Icon: Vault },
		{ name: 'Notes', path: Routes.APP_NOTES, Icon: Note },
		{ name: 'Favorites', path: Routes.APP_FAVORITES, Icon: Heart },
		{ name: 'Trash', path: Routes.APP_TRASH, Icon: Trash }
	];
</script>

<nav class="sidebar">
	{#each navItems as { name, path, Icon } (path)}
		<!-- TODO: Setup tooltips to show name -->

		<a
			href={path}
			class="nav-item bounce-effect {containsPath($page.route.id, path) ? 'active' : ''}"
		>
			<Icon weight={containsPath($page.route.id, path) ? 'fill' : 'regular'} />
		</a>
	{/each}

	<!-- Flexible Spacer -->
	<div class="spacer" />

	<!-- Profile Button -->
	<a
		href={Routes.APP_PROFILE}
		class="nav-item profile-btn bounce-effect {containsPath($page.route.id, Routes.APP_PROFILE)
			? 'active'
			: ''}"
	>
		<!-- TODO: Setup tooltips to show name -->
		<img src="https://api.dicebear.com/8.x/adventurer/svg?seed=Angel" alt="Profile Avatar" />
	</a>

	<!-- Settings Button -->
	<a
		href={Routes.APP_SETTINGS}
		class="nav-item bounce-effect {containsPath($page.route.id, Routes.APP_SETTINGS)
			? 'active'
			: ''}"
	>
		<!-- TODO: Setup tooltips to show name -->
		<Gear weight={containsPath($page.route.id, Routes.APP_SETTINGS) ? 'fill' : 'regular'} />
	</a>

	<!-- App lock button -->
	<button
		on:click={() => {
			// Todo: Implement complete logout system
			goto(Routes.LOGIN);
		}}
		class="nav-item bounce-effect"
	>
		<!-- TODO: Setup tooltips to show name -->
		<LockKey />
	</button>
</nav>

<style>
	.sidebar {
		width: 8rem;
		border-right: 1px solid var(--border);
		flex-shrink: 0;
		background-color: rgba(255, 255, 255, 0.05);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing-24) var(--spacing-16);
		gap: var(--spacing-16);
	}

	.nav-item,
	.profile-btn > img {
		aspect-ratio: 1/1;
		border-radius: var(--rounded-full);
	}

	.nav-item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 4rem;
		cursor: pointer;
		transition-property: width background-color;
		transition-duration: 0.35s;
		flex-shrink: 0;
		transition-timing-function: linear;
		transform-origin: center;
	}

	.nav-item:hover {
		background-color: rgba(0, 0, 0, 0.25);
		filter: brightness(0.75);
	}

	.nav-item.active {
		filter: none;
		color: var(--primary);
		border: 2px solid var(--primary);
		background-color: rgba(var(--primary-rgb), 0.25);
	}

	.spacer {
		flex: 1 1;
	}

	.profile-btn {
		width: 4rem;
		border: 2px solid var(--border);
	}

	.profile-btn > img {
		width: 3.2rem;
	}

	.profile-btn,
	.profile-btn.active {
		background-color: var(--bg);
	}
</style>
