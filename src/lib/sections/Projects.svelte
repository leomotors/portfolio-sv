<script lang="ts">
  import { goto } from "$app/navigation";

  import * as Quotes from "$lib/data/amazingQuotes.json";
</script>

<div
  class="prog-img bg-no-repeat bg-cover bg-center w-5/6 my-10 mx-auto h-160 sm:h-96 rounded-2xl relative"
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
    class="m-4 absolute bottom-4 left-0 sm:left-4 hover:translate-x-4 transition-all"
    on:click={() => {
      goto("/projects");
    }}
  >
    <h1 class="font-bold text-4xl select-none text-white hover:text-gray-200">
      My Projects >>>
    </h1>
  </button>

  <p class="absolute bottom-3 right-6 text-slate-200 xl:text-xl select-none">
    Picture by IMDEA Network
  </p>
</div>

<style lang="postcss">
  .quotation-mark {
    @apply absolute text-emerald-400 text-4xl xl:text-5xl select-none;
  }

  .nbsp {
    @apply select-none;
  }
</style>
