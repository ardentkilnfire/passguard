<script lang="ts">
	import { invoke } from '@tauri-apps/api/core';
	import { listen } from '@tauri-apps/api/event';
	import { goto } from '$app/navigation';
	import { Routes } from '$lib/config';

	let SECRET_KEY: string;

	async function verifyKeyWithBackend(key: string) {
		try {
			// Invoke a command named 'process_secret_key' and send the secret key to the backend
			setupValidationListener();
			await invoke('process_secret_key', { key });
		} catch (error) {
			alert(`Failed to send the secret key: ${error}`);
		}
	}

	// Function to setup event listener for the secret key validation result
	function setupValidationListener() {
		listen('secret_key_validation', (event) => {
			if (event.payload) {
				goto(Routes.APP_ROOT);
			} else {
				alert('Secret key is invalid.');
				// Handle invalid key scenario
			}
		});
	}
</script>

<div class="container">
	<div class="title">
		<p>Login</p>
		<div class="divider" />
	</div>

	<input
		type="password"
		name="SECRET_KEY"
		placeholder="Enter your SECRET_KEY"
		bind:value={SECRET_KEY}
	/>

	<button on:click={() => verifyKeyWithBackend(SECRET_KEY)}>Login</button>
</div>

<style>
	.container {
		display: flex;
		width: 62rem;
		max-width: 62rem;
		flex-direction: column;
		background-color: rgba(255, 255, 255, 0.05);
		border-radius: var(--rounded-4);
		gap: var(--spacing-16);
		padding: var(--spacing-16);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.title {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-8);
	}

	.divider {
		height: 1px;
		background-color: rgba(255, 255, 255, 0.05);
	}

	.container > input {
		background-color: rgba(0, 0, 0, 0.25);
		padding: var(--spacing-8);
		border-radius: var(--rounded-4);
	}

	.container > button {
		background-color: var(--primary);
		color: var(--bg);
		padding: var(--spacing-8) 0;
		border-radius: var(--rounded-4);
		font-weight: 600;
	}
</style>
