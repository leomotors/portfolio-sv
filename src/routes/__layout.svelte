<script lang="ts">
  import "../app.css";
  import "$lib/styles/global.postcss";
  import "$lib/styles/bigcard.postcss";
  import "$lib/styles/cardpage.postcss";

  import NavBar from "$lib/layout/NavBar.svelte";
  import Footer from "$lib/layout/Footer.svelte";

  export let dark: boolean;
</script>

<div class:dark>
  <main
    class="bg-white dark:bg-slate-900 text-black dark:text-white transition-all"
  >
    <NavBar bind:dark />

    <hr class="w-4/5 mx-auto" />

    <section>
      <slot />
    </section>

    <Footer />
  </main>
</div>

<style lang="postcss">
  section {
    @apply min-h-[calc(100vh-16rem)] lg:min-h-[calc(100vh-12rem)];
  }
</style>
