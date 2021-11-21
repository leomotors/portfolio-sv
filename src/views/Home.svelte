<script lang="ts">
  import Introduction from "../sections/Introduction.svelte";
  import LangCard from "../sections/LangCard.svelte";
  import EdHistory from "../sections/EdHistory.svelte";
</script>

<main class="page-content">
  <div class="alert-box bg-pink-300 m-4 rounded-lg border-red-500 border-2">
    <p class="p-2">
      <b>UNDER CONSTRUCTION</b>: Website not done yet. Please don't consider
      this as my portfolio yet!
    </p>
  </div>
  <Introduction />
  <div class="lang-cards flex flex-row justify-center">
    <LangCard />
    <div
      class="shadow-lg w-1/3 xl:w-1/4 h-48 hidden lg:inline bg-white rounded-lg m-12 hover:scale-105 transition-transform"
    >
      <h1 class="p-2 font-semibold text-2xl">Programming Language</h1>
      <hr class="text-gray-300 mx-4" />
      <div class="card-content h-32 px-6 pt-8">
        {#each ["C", "C++", "JavaScript", "TypeScript", "Python", "Dart", "HTML", "CSS", "SCSS", "Svelte"] as lang}
          <span> {lang} </span>
        {/each}
      </div>
    </div>
  </div>

  <EdHistory />

  <button
    class="rounded-xl shadow-md bg-blue-200 hover:bg-blue-300 hover:scale-105 transition-transform p-4 mt-8"
    on:click={() => {
      window.location.href = "/projects";
    }}
  >
    <h1 class="font-bold text-4xl select-none">My Projects</h1>
  </button>
</main>
