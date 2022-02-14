<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const res = await fetch("https://api.github.com/users/Leomotors");
    const data = await res.json();

    return {
      props: { githubData: data },
    };
  };
</script>

<script lang="ts">
  import Introduction from "$lib/sections/Introduction.svelte";
  import LangCards from "$lib/sections/LangCards.svelte";
  import EdHistory from "$lib/sections/EdHistory.svelte";
  import ActivitiesCard from "$lib/sections/ActivitiesCard.svelte";
  import ProjectsCard from "$lib/sections/ProjectsCard.svelte";

  export let githubData;
</script>

<main class="page-content">
  <Introduction data={githubData} />
  <LangCards />
  <EdHistory />
  <ActivitiesCard />
  <ProjectsCard />
</main>
