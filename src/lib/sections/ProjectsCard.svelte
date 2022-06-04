<script lang="ts">
  import { goto } from "$app/navigation";

  import * as Quotes from "$lib/data/amazingQuotes.json";
</script>

<main
  class="big-picture-card"
  style="background-image: url(images/coding-bg.webp)"
>
  <blockquote
    class="hover:scale-102.5 absolute top-4 m-3 max-w-full rounded-xl bg-slate-700 p-3 text-left font-serif text-xl text-gray-100 transition-transform sm:left-4 lg:w-2/3 xl:w-3/5 xl:text-2xl 2xl:w-1/2"
  >
    <span class="quotation-mark">&ldquo;</span>
    <span class="nbsp">&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <span>{Quotes.harvard}</span>
    <span class="nbsp">&nbsp;</span>
    <span class="quotation-mark">&rdquo;</span>
    <p class="pr-12 text-right">— said me, on one of my University App Essay</p>
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
    @apply absolute select-none text-4xl text-emerald-400 xl:text-5xl;
  }

  .nbsp {
    @apply select-none;
  }
</style>
