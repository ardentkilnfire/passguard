<script>
	import Titlebar from '$components/layout/Titlebar.svelte';
	import { IconContext } from 'phosphor-svelte';
	import '../styles/app.scss';
</script>

<Titlebar />
<IconContext values={{ weight: 'bold', size: 24, class: 'icon' }}>
	<slot />
</IconContext>
