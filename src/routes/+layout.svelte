<script lang="ts">
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/png" href="/favicon.ico" />
  <link rel="manifest" href="/manifest.json" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{@render children?.()}

<style>
  :global(body) {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
