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
  <link
    href="https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css"
    rel="stylesheet"
  />
  <meta name="title" content="Global Wealth Rank | Worldly Worth" />
  <meta
    name="description"
    content="Find out where you rank in the world's wealth distribution with a simple, anonymous quiz. Compare your living standards and financial status with the global population."
  />
  <meta
    name="keywords"
    content="global wealth, wealth quiz, living standards, financial status, global rank, poverty, prosperity, anonymous quiz, worldlyworth"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.worldlyworth.org/" />
  <meta
    property="og:title"
    content="What's Your Global Wealth Rank? | Worldly Worth"
  />
  <meta
    property="og:description"
    content="Take the quiz and discover your financial status compared to the rest of the world. Are you in the top 1%?"
  />
  <meta
    property="og:image"
    content="https://www.worldlyworth.org/social-image.png"
  />

  <meta property="twitter:url" content="https://www.worldlyworth.org/" />
  <meta
    property="twitter:title"
    content="What's Your Global Wealth Rank? | Worldly Worth"
  />
  <meta
    property="twitter:description"
    content="Take the quiz and discover your financial status compared to the rest of the world. Are you in the top 1%?"
  />
  <meta
    property="twitter:image"
    content="https://www.worldlyworth.org/social-image.png"
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
