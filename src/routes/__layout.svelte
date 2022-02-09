<script lang="ts">
  import "../app.postcss";
  import "$lib/styles/global.postcss";
  import "$lib/styles/cardpage.postcss";

  import GitHub from "$lib/icons/GitHub.svelte";

  // Dropdown Menu Stuff
  let mouseOnMenu = false;
  let mouseOnDropdown = false;
  let mouseOnMenuTimeout: NodeJS.Timeout = null;
  let mouseOnDropdownTimeout: NodeJS.Timeout = null;
  let forcedOpen = false;

  const links = {
    blog: "Blog",
    skills: "Skills",
    activities: "Activities",
    projects: "Projects",
    about: "About Website",
  };
</script>

<!-- NavBar -->
<main
  class="navbar bg-indigo-200 w-full h-12 px-6 flex flex-row items-center justify-between relative z-10"
>
  <div class="gh-tag flex flex-row">
    <img
      class="h-10 w-10 rounded-full my-auto"
      src="https://avatars.githubusercontent.com/u/59821765?v=4"
      alt="My GitHub Profile Pic"
    />
    <a class="nav-label" href="/"> Leomotors </a>
    <a
      class="nav-label"
      target="_blank"
      rel="noopener"
      href="https://github.com/Leomotors"
      title="Click here to visit my GitHub Profile"
    >
      <GitHub />
    </a>
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
    class="dropdown-menu absolute right-0.5 top-0 p-4 bg-white rounded {forcedOpen ||
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
  >
    {#each Object.entries(links) as [key, val]}
      <a class="hover:underline" href="/{key}">{val}</a>
    {/each}
  </div>
</main>

<!-- Website Content -->
<slot />

<style lang="postcss">
  * {
    @apply select-none;
  }

  .nav-label {
    @apply ml-2 hover:text-gray-800;
  }

  .gh-tag > a {
    @apply hover:scale-102.5 transition-transform;
  }

  /* Text Stuff */
  .gh-tag > a,
  .nav-menu > a,
  .dropdown-text {
    @apply my-auto font-medium text-lg;
  }

  /* Dropdown Menu Stuff */
  .nav-menu > a {
    @apply hidden md:inline;
  }
  .nav-menu > a,
  .dropdown-text {
    @apply mx-2 px-2 bg-gray-50 rounded hover:bg-gray-100 hover:scale-105 transition-all;
  }
</style>
