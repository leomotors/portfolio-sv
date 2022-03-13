<script lang="ts">
  import LangCards from "$lib/sections/LangCards.svelte";
  import EdHistory from "$lib/sections/EdHistory.svelte";
  import ActivitiesCard from "$lib/sections/ActivitiesCard.svelte";
  import ProjectsCard from "$lib/sections/ProjectsCard.svelte";

  import { goto } from "$app/navigation";
</script>

<main class="page-content">
  <h1 class="page-title">About me</h1>
  <LangCards />
  <EdHistory />
  <ActivitiesCard />
  <ProjectsCard />

  <button
    class="p-4 mb-4 font-bold text-2xl bg-white rounded-xl shadow-xl expand"
    on:click={() => goto("/blog/introduction")}
  >
    Read my first Blog Post
  </button>
</main>
