<script lang="ts">
	import { goto } from '$app/navigation';
	import { Routes } from '$lib/config';
</script>

<!-- TODO: Implement actual Onboarding page -->
<button
	on:click={() => {
		// TODO: Implement actual onboarding system
		alert('Implementation Pending');

		// Temporary bypass
		goto(Routes.LOGIN);
	}}
>
	Continue
</button>

<style>
	button {
		background-color: var(--primary-hsl);
		padding: var(--spacing-8) var(--spacing-16);
		border-radius: var(--rounded-4);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-weight: 600;
		color: var(--bg);
		box-shadow: var(--shadow-sm);
	}
</style>
