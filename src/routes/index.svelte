<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("https://api.github.com/users/Leomotors");
    const data = await res.json();
    return {
      props: { githubData: data },
    };
  }
</script>

<script lang="ts">
  import Introduction from "$lib/sections/Introduction.svelte";
  import LangCards from "$lib/sections/LangCards.svelte";
  import EdHistory from "$lib/sections/EdHistory.svelte";
  import Projects from "$lib/sections/Projects.svelte";
  import Awards from "$lib/sections/Awards.svelte";

  export let githubData;
</script>

<main class="page-content">
  <Introduction data={githubData} />
  <LangCards />
  <EdHistory />
  <Projects />
  <Awards />
</main>
