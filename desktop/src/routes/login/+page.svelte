<script lang="ts">
	import { goto } from '$app/navigation';
	import { Routes } from '$lib/config';
</script>

<button
	on:click={() => {
		alert('Not implemented yet');
		// Temporary bypass
		goto(Routes.APP_ROOT);
	}}
>
	Open Login Dialogue
</button>

<style>
	button {
		background-color: rgba(var(--primary-rgb), 0.2);
		padding: var(--spacing-8) var(--spacing-16);
		border-radius: var(--rounded-4);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-weight: 600;
		color: rgba(var(--primary-rgb), 0.5);
		box-shadow: var(--shadow-sm);
	}
</style>
