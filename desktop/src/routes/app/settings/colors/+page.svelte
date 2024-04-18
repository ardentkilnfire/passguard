<script lang="ts">
	import type { Color } from '$lib/types/colors';
	import { Check, PencilSimple, TrashSimple } from 'phosphor-svelte';

	// TODO: implement logic to fetch colors from database (may be in +layout.ts load function)

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

	let editMap: Record<
		string,
		{
			label: string;
			color: string;
		}
	> = {};

	// controlled by "Add" button
	let addMode = false;

	// bound to label input when in "add mode"
	let labelInput = '';

	// bound to color picker's input when in "add mode"
	let selectedColorInAddMode: string = '#FFFFFF';

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

	function enableEditMode(label: string) {
		// get item
		const colorItem = colors.find((color) => color.label === label)!;

		// initialize the map in editMap with current values as defaults
		editMap[label] = {
			label: colorItem.label,
			color: colorItem.value
		};
	}

	function saveEditedItem(label: string) {
		// set data in actual `colors` array
		colors = colors.map((color) => {
			if (color.label === label) {
				color = {
					label: editMap[label].label,
					value: editMap[label].color
				};
			}
			return color;
		});
		// disable edit mode
		delete editMap[label];
		// simple hack to force re-render the ui
		editMap = editMap;
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
							<!-- color picker -->
							<div class="color-picker-wrapper">
								<div
									class="color-wrapper editable"
									style="--color-value: {selectedColorInAddMode};"
								>
									<input bind:value={selectedColorInAddMode} type="color" />
								</div>
							</div>
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
			{@const isEditing = Object.keys(editMap).includes(label)}
			<div style="--color-value: {isEditing ? editMap[label].color : value};" class="color-item">
				<div class="color-wrapper" class:editable={isEditing}>
					{#if isEditing}
						<input bind:value={editMap[label].color} type="color" />
					{/if}
				</div>

				<div class="label">
					{#if isEditing}
						<div>
							<input
								on:keyup={(e) => e.code === 'Enter' && saveEditedItem(label)}
								bind:value={editMap[label].label}
							/>
						</div>
					{:else}
						<span>
							{label}
						</span>
					{/if}

					{#if isEditing}
						<button on:click={() => saveEditedItem(label)} class="save-btn">
							<Check size={20} />
						</button>
					{:else}
						<button on:click={() => enableEditMode(label)} class="edit-btn">
							<PencilSimple size={20} />
						</button>
					{/if}
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
		background-color: var(--primary-hsl);
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
		align-items: center;
		width: 100%;
		padding: var(--spacing-16) var(--spacing-8);
		border-bottom: 0.5px solid var(--border);
		gap: var(--spacing-16);

		.color-wrapper {
			width: 25px;
		}

		.label {
			flex-grow: 1;
			font-weight: 600;
			display: flex;
			align-items: center;
			gap: var(--spacing-4);

			.edit-btn {
				display: none;
			}

			.save-btn {
			}
		}

		&:hover > .label > .edit-btn {
			display: block;
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
				display: flex;
				flex-direction: column;
				gap: var(--spacing-4);

				.input-wrapper {
					display: flex;
					gap: var(--spacing-8);

					.color-picker-wrapper {
						display: grid;
						place-items: center;

						.color-wrapper {
							width: 25px;
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

	.color-wrapper {
		background-color: var(--color-value);
		border-radius: var(--rounded-full);
		position: relative;
		overflow: hidden;
		aspect-ratio: 1 / 1;

		input[type='color'] {
			opacity: 0;
			z-index: -100;
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
		}

		&.editable input[type='color'] {
			z-index: 1;
		}
	}
</style>
