<script lang="ts">
  import Introduction from "../sections/Introduction.svelte";
  import LangCard from "../sections/LangCard.svelte";
  import EdHistory from "../sections/EdHistory.svelte";
</script>

<main class="page-content">
  <Introduction />
  <div class="lang-cards flex flex-row justify-center">
    <LangCard />
    <div
      class="shadow-lg w-1/3 xl:w-1/4 h-48 hidden lg:inline bg-white rounded m-12 hover:scale-105 transition-transform"
    >
      <h1 class="p-2 font-semibold">Programming Language</h1>
      <hr class="text-gray-300 mx-4" />
      <div class="card-content h-32 flex flex-col justify-center">
        <h1 class="font-semibold text-center m-auto">Placeholder</h1>
      </div>
    </div>
  </div>
  <EdHistory />
</main>
