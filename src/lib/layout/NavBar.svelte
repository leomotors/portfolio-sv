<script lang="ts">
  import { onMount } from "svelte";

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  import List from "$lib/icons/List.svelte";
  import LightDark from "$lib/icons/LightDark.svelte";

  export let dark = false;

  let popup = false;

  const routes = {
    "/": "Home",
    skills: "Skills",
    activities: "Activities",
    projects: "Projects",
  };

  function toggleDark() {
    dark = !dark;
    localStorage.setItem("dark", dark ? "true" : "false");
  }

  onMount(() => {
    const prefered =
      localStorage.getItem("dark") ??
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? true
        : false;

    if (prefered) dark = true;
    else dark = false;

    window.addEventListener("click", () => (popup = false));
  });
</script>

<main
  class="w-4/5 lg:w-2/3 mx-auto h-32 flex flex-row items-center justify-between select-none"
>
  <div class="left flex flex-row">
    <img
      class="h-12 w-12 rounded-full my-auto cursor-pointer"
      src="https://avatars.githubusercontent.com/u/59821765?v=4"
      alt="My GitHub Profile Pic"
      title="My GitHub Profile Picture"
      on:click={() => {
        goto("/");
      }}
    />
  </div>

  <div class="right flex flex-row gap-4">
    <button on:click={toggleDark}>
      <LightDark {dark} />
    </button>

    <!-- Desktop Nav -->
    <div
      class="links px-4 flex-row hidden sm:flex justify-end items-center gap-2"
    >
      {#each Object.entries(routes) as [url, name]}
        <a
          class="text-xl p-2 rounded transition-all {(
            url == '/'
              ? $page.url.pathname == '/'
              : $page.url.pathname == '/' + url
          )
            ? 'bg-slate-400 dark:bg-slate-800 cursor-default'
            : 'hover:bg-slate-300 dark:hover:bg-slate-700'}"
          href={url}
        >
          {name}
        </a>
      {/each}
    </div>

    <!-- Mobile Nav -->
    <div
      class="inline sm:hidden bg-slate-200 dark:bg-slate-800 hover:bg-slate-600 p-2 rounded"
      on:click={() => setTimeout(() => (popup = !popup), 10)}
    >
      <List />
    </div>

    <div
      class="bg-slate-200 dark:bg-slate-800 rounded flex flex-col {popup
        ? 'right-8 opacity-100'
        : '-right-28 opacity-0'} absolute top-4 p-2 transition-all"
    >
      {#each Object.entries(routes) as [url, name]}
        <a
          class="text-xl {(
            url == '/'
              ? $page.url.pathname == '/'
              : $page.url.pathname == '/' + url
          )
            ? 'text-pink-500'
            : 'dark:text-white'} p-2 rounded transition-all"
          href={url}
        >
          {name}
        </a>
      {/each}
    </div>
  </div>
</main>
