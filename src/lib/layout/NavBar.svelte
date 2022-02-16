<script lang="ts">
  import { goto } from "$app/navigation";
  import type { GitHubStatus } from "$lib/types";
  import { shorten } from "$lib/utils";

  // Dropdown Menu Stuff
  let mouseOnMenu = false;
  let mouseOnDropdown = false;
  let mouseOnMenuTimeout: NodeJS.Timeout = null;
  let mouseOnDropdownTimeout: NodeJS.Timeout = null;
  let forcedOpen = false;

  const links = {
    about: "About",
    skills: "Skills",
    activities: "Activities",
    projects: "Projects",
    blog: "Blog",
  };

  const statTitle = "My Current GitHub Status";

  export let status: GitHubStatus;
</script>

<main
  class="navbar bg-indigo-200 w-full h-12 px-6 xl:px-8 flex flex-row items-center justify-between relative z-10"
>
  <div class="gh-tag flex flex-row">
    <img
      class="h-10 w-10 rounded-full my-auto cursor-pointer"
      src="https://avatars.githubusercontent.com/u/59821765?v=4"
      alt="My GitHub Profile Pic"
      title="My GitHub Profile Picture / Click here to go to home page"
      on:click={() => {
        goto("/");
      }}
    />

    {#if status.message}
      <p class="ml-2 flex flex-row items-center">
        {#if status.emoji}
          <span class="text-3xl">
            {status.emoji}
          </span>
        {/if}
        <span
          class="hidden lg:inline xl:hidden"
          title={status.message.length > 36 ? status.message : statTitle}
        >
          {shorten(status.message, 36)}
        </span>
        <span class="hidden xl:inline" title={statTitle}>
          {status.message}
        </span>
      </p>
    {/if}
  </div>

  <!-- Navigation Menu, Unfold on big screen, Dropdown menu on small screen -->
  <div class="nav-menu flex flex-row">
    <!-- Full Menu on Big Screen -->
    {#each Object.entries(links) as [key, val]}
      <a href="/{key}">{val}</a>
    {/each}
    <!-- Short Menu that spawns dropdown -->
    <p
      class="dropdown-text inline md:hidden"
      on:mouseenter={() => {
        mouseOnMenu = true;
        clearTimeout(mouseOnMenuTimeout);
      }}
      on:mouseleave={() => {
        mouseOnMenuTimeout = setTimeout(() => {
          mouseOnMenu = false;
          mouseOnMenuTimeout = null;
        }, 750);
      }}
      on:click={() => {
        forcedOpen = !forcedOpen;
        if (!forcedOpen) {
          mouseOnMenu = mouseOnDropdown = false;
        }
      }}
    >
      Menu
    </p>
  </div>

  <div
    class="dropdown-menu absolute right-4 top-0 p-4 bg-white rounded {forcedOpen ||
    mouseOnMenu ||
    mouseOnDropdown
      ? 'translate-y-10 opacity-90'
      : 'opacity-0 pointer-events-none'} transition-all flex flex-col hover:scale-102.5 md:hidden shadow-xl"
    on:mouseenter={() => {
      mouseOnDropdown = true;
      clearTimeout(mouseOnDropdownTimeout);
    }}
    on:mouseleave={() => {
      mouseOnDropdownTimeout = setTimeout(() => {
        mouseOnDropdown = false;
        mouseOnDropdownTimeout = null;
      }, 750);
    }}
    on:click={() => {
      forcedOpen = false;
      mouseOnMenu = false;
      mouseOnDropdown = false;
    }}
  >
    {#each Object.entries(links) as [key, val]}
      <a class="hover:underline" href="/{key}">{val}</a>
    {/each}
  </div>
</main>

<style lang="postcss">
  * {
    @apply select-none;
  }

  /* Text Stuff */
  .gh-tag > p,
  .nav-menu > a,
  .dropdown-text {
    @apply my-auto font-medium text-lg;
  }

  .gh-tag > p {
    @apply text-xl text-gray-700;
  }

  /* Dropdown Menu Stuff */
  .nav-menu > a {
    @apply hidden md:inline;
  }
  .nav-menu > a,
  .dropdown-text {
    @apply mx-2 px-2 bg-gray-50 rounded hover:bg-gray-100 expand transition-all;
  }
</style>
