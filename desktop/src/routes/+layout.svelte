<script>
  import App from '$components/layout/App.svelte';
  import Titlebar from '$components/layout/Titlebar.svelte';
  import { IconContext } from 'phosphor-svelte';
  import '../styles/app.scss';
</script>

<Titlebar />
<IconContext values={{ weight: 'regular', size: 24, class: 'anim-press' }}>
  <App>
    <!-- TODO: Sidebar -->

    <!-- Content Area -->
    <main>
      <slot />
    </main>
  </App>
</IconContext>
