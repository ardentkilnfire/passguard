<script lang="ts">
	import { webviewWindow } from '@tauri-apps/api';
	import { getName } from '@tauri-apps/api/app';
	import { onMount } from 'svelte';

	let appName = '';

	onMount(async () => {
		appName = await getName();
	});
</script>

<div data-tauri-drag-region class="titlebar">
	<!-- App Branding -->
	<div class="app-branding">
		<img src="/favicon.ico" alt="App Logo" class="logo" />
		<span class="app-title">{appName}</span>
	</div>

	<!-- App Controls -->
	<div class="controls">
		<button
			on:click={webviewWindow.getCurrent().minimize}
			class="btn-minimize"
			aria-label="Minimize"
		/>
		<button class="btn-maximize" disabled />
		<button on:click={webviewWindow.getCurrent().close} class="btn-close" aria-label="Close" />
	</div>
</div>

<style>
	.app-branding,
	.titlebar {
		display: flex;
		align-items: center;
	}

	.titlebar {
		height: var(--titlebar-height);
		background-color: var(--bg-titlebar);
		border-bottom: 1px solid var(--border);
		padding: 0 var(--spacing-8);
		justify-content: space-between;
	}

	.app-branding {
		gap: var(--spacing-4);
		pointer-events: none;
	}

	.app-branding > img {
		width: 2.4rem;
		height: 2.4rem;
	}

	.app-title {
		font-size: var(--font-12);
		font-weight: 600;
		letter-spacing: -0.075ch;
	}

	.controls {
		display: flex;
		align-items: center;
		gap: var(--spacing-8);
		pointer-events: none;
	}

	.controls > button {
		border-radius: var(--rounded-full);
		width: 1.2rem;
		height: 1.2rem;
		cursor: default;
	}

	.controls > button:hover {
		filter: brightness(0.75);
	}

	.btn-minimize {
		background-color: hsl(141, 67%, 67%);
		pointer-events: all;
	}

	.btn-maximize {
		background-color: hsl(193, 11%, 35%);
	}

	.btn-close {
		background-color: hsl(0, 100%, 73%);
		pointer-events: all;
	}
</style>
