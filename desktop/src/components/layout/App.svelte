<div id="app">
  <slot />
</div>

<style>
  #app {
    height: calc(100vh - var(--titlebar-height));
    width: 100vw;
    display: flex;
  }
</style>
