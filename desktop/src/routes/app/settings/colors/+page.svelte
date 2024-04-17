<script lang="ts">
	import type { Color } from '$lib/types/colors';
	import { Check, TrashSimple } from 'phosphor-svelte';

	// TODO: implement logic to fetch colors from database (may be in +layout.ts load function)
	// TODO: implement edit feature

	// Temporary data
	let colors: Color[] = [
		{
			label: 'Critical',
			value: '#dc2626'
		},
		{
			label: 'Warning',
			value: '#eab308'
		}
	];

	// controlled by "Add" button
	let addMode = false;

	// bound to label input when in "add mode"
	let labelInput = '';

	// bound to color picker's input when in "add mode"
	let selectedColorInAddMode: string = '#ffffff';

	// toggle "add mode"
	function toggleAdd() {
		addMode = !addMode;
	}

	function deleteItem(label: string) {
		// TODO: sync with database via backend call
	}

	function handleAdd() {
		// TODO: handle logic and backend calls
	}
</script>

<div class="container">
	<div class="header">
		<h1>Color Management</h1>
		<button on:click={toggleAdd} class="btn-add">Add</button>
	</div>

	<div class="divider"></div>

	<!-- When user clicks on add button, "add mode" is activated -->
	{#if addMode}
		<div class="add-color-container">
			<form on:submit|preventDefault={handleAdd}>
				<div class="input-container">
					<div class="label-input">
						<span>Label</span>
						<input placeholder="Label" bind:value={labelInput} maxlength="20" type="text" />
					</div>

					<div class="color-input">
						<span>Color</span>
						<div class="input-wrapper">
							<input type="color" bind:value={selectedColorInAddMode} />
							<input type="text" bind:value={selectedColorInAddMode} />
						</div>
					</div>
				</div>

				<div class="actions">
					<button type="submit" class="btn-action success">
						<Check size={20} />
					</button>
				</div>
			</form>
		</div>
	{/if}

	<div class="flex-column color-items-container">
		{#each colors as { label, value } (label)}
			<div style="--color-value: {value};" class="color-item">
				<!-- color preview -->
				<div class="preview"></div>
				<div class="label">
					{label}
				</div>
				<div class="actions">
					<button class="btn-action destructive" on:click={() => deleteItem(label)}
						><TrashSimple size={20} /></button
					>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		padding: var(--spacing-8) var(--spacing-16);

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.divider {
			margin: var(--spacing-8) 0;
		}
	}

	.btn-add {
		background-color: var(--primary);
		color: var(--bg);
		padding: var(--spacing-4) var(--spacing-8);
		border-radius: var(--rounded-4);
		font-size: var(--font-12);
		font-weight: 800;
	}

	.color-items-container {
		padding: var(--spacing-8) 0;
	}

	.color-items-container .color-item {
		display: flex;
		align-items: end;
		width: 100%;
		padding: var(--spacing-16) var(--spacing-8);
		border-bottom: 0.5px solid var(--border);
		gap: var(--spacing-16);

		.preview {
			width: 1.5em;
			height: 1.5em;
			background-color: var(--color-value);
			border-radius: var(--rounded-full);
		}

		.label {
			flex-grow: 1;
			font-weight: 600;
		}
	}

	.actions {
		display: flex;
		gap: var(--spacing-8);

		.btn-action {
			background-color: var(--bg-surface);
			padding: var(--spacing-8) var(--spacing-8);
			border-radius: var(--rounded-4);
			font-size: var(--font-12);
			font-weight: 800;
			height: fit-content;

			&.destructive {
				background-color: var(--destructive-hsl);
			}

			&.success {
				background-color: var(--success-hsl);
			}
		}
	}

	.add-color-container {
		background-color: var(--bg-surface);
		border: 1px solid var(--border);
		border-radius: var(--rounded-4);
		padding: var(--spacing-16) var(--spacing-16);

		form {
			display: flex;
			align-items: center;
		}

		.input-container {
			flex-grow: 1;
			display: flex;
			gap: var(--spacing-16);

			.label-input {
				display: flex;
				flex-direction: column;
				gap: var(--spacing-4);
			}

			.color-input {
				.input-wrapper {
					display: flex;
					gap: var(--spacing-4);
					width: fit-content;

					// Styling color picker
					input[type='color'] {
						width: 3em;
						height: 3em;
						border: none;
						overflow: hidden;
						padding: var(--spacing-4);

						&::-webkit-color-swatch {
							border: none;
							border-radius: var(--rounded-full);
						}
					}

					input[type='text'] {
						text-transform: uppercase;
					}
				}
			}

			span {
				font-size: var(--font-12);
				font-weight: 700;
			}
		}

		.actions {
			display: flex;
			gap: var(--spacing-4);
		}
	}

	input {
		height: 100%;
		width: 100%;
		padding: var(--spacing-8);
		background-color: transparent;
		font-size: var(--font-14);
		font-stretch: wider;
		font-weight: 600;
		border: 1px solid var(--border);
		border-radius: var(--rounded-4);
	}

	input::placeholder {
		font-weight: 600;
		color: rgba(149, 167, 177, 0.5);
	}
</style>
