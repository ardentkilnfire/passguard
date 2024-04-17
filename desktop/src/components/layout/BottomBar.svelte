<script>
	import { RocketLaunch } from 'phosphor-svelte';
	import Confetti from 'svelte-confetti';

	function checkAvailableUpdates() {
		// TODO: Implement actual functionality to check for updates
		alert('Not implemented yet');
	}
</script>

<footer>
	<p>
		Created on a special one's
		<span>🎊🎉 birthday 🎊🎉 </span>
		<span class="confetti">
			<Confetti
				duration={3000}
				delay={[0, 8000]}
				x={[-1, 1]}
				fallDistance="-50vh"
				size={6}
				amount={100}
			/>
		</span>
	</p>

	<!-- Check for updates button -->
	<button on:click={checkAvailableUpdates}>
		<RocketLaunch size="16" />
	</button>
</footer>

<style>
	footer {
		position: fixed;
		bottom: 0;
		right: 0;
		width: calc(100% - var(--sidebar-size));
		height: var(--bottom-bar-height);
		background-color: var(--bg-surface);
		border-top: 1px solid var(--border);
		display: flex;
	}

	button {
		border-left: 1px solid var(--border);
		color: hsl(0, 0%, 83%);
		padding: 0 var(--spacing-16);
		flex-shrink: 0;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: hsla(0, 0%, 100%, 0.1);
	}

	.confetti,
	p {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	p {
		position: relative;
		font-size: var(--font-12);
		font-weight: 800;
		color: hsl(39, 96%, 57%);
	}

	span {
		color: var(--primary);
		text-indent: 1ch;
		font-size: var(--font-14);
		text-transform: uppercase;
	}

	.confetti {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		pointer-events: none;
	}
</style>
