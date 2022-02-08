<script lang="ts">
  import { goto } from "$app/navigation";

  import * as Quotes from "$lib/data/amazingQuotes.json";
</script>

<main
  class="big-picture-card"
  style="background-image: url(images/coding-bg.webp)"
>
  <blockquote
    class="text-left text-gray-100 font-serif m-3 p-3 max-w-full lg:w-1/2 text-xl xl:text-2xl bg-slate-700 rounded-xl absolute sm:left-4 top-4 hover:scale-102.5 transition-transform"
  >
    <span class="quotation-mark">&ldquo;</span>
    <span class="nbsp">&nbsp;&nbsp;&nbsp;&nbsp;</span>
    {Quotes.harvard}
    <span class="nbsp">&nbsp;</span>
    <span class="quotation-mark">&rdquo;</span>
    <p class="text-right pr-12">— said me, on one of my University App Essay</p>
  </blockquote>
  <button
    class="big-picture-nav"
    on:click={() => {
      goto("/projects");
    }}
  >
    <h1>My Projects >>></h1>
  </button>

  <p class="credit-text">Picture by IMDEA Network</p>
</main>

<style lang="postcss">
  .quotation-mark {
    @apply absolute text-emerald-400 text-4xl xl:text-5xl select-none;
  }

  .nbsp {
    @apply select-none;
  }
</style>
