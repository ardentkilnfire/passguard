<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();
</script>

<div in:fly={{ y: 100, duration: 400 }} out:fly={{ y: 20, duration: 400 }} class="save-prompt">
	<p>We have detected some changes, Do you want to save them?</p>
	<button class="btn-reset" on:click={() => dispatch('reset')}>Reset</button>
	<button class="btn-save" on:click={() => dispatch('save')}>Save</button>
</div>

<style lang="scss">
	.save-prompt {
		position: fixed;
		bottom: var(--spacing-16);
		display: flex;
		align-items: center;
		gap: var(--spacing-16);
		background-color: var(--bg-surface);
		padding: var(--spacing-8) var(--spacing-16);
		border-radius: var(--rounded-4);
		left: 50%;
		transform: translateX(-50%);
		width: fit-content;
		font-weight: 800;
		box-shadow: 0 2px 16px hsla(0, 0%, 0%, 0.5);

		p {
			font-size: var(--font-14);
			font-weight: 600;
		}

		.btn-reset {
			color: hsl(0, 100%, 73%);

			&:hover {
				text-decoration: underline;
			}
		}

		.btn-save {
			padding: var(--spacing-4) var(--spacing-16);
			background-color: hsl(115, 42%, 47%);
			border-radius: var(--rounded-4);
		}
	}
</style>
