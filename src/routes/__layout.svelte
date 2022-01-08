<script lang="ts">
  import "../app.css";
  import GitHub from "$lib/icons/GitHub.svelte";

  // Dropdown Menu Stuff
  let mouseOnMenu = false;
  let mouseOnDropdown = false;
  let mouseOnMenuTimeout: NodeJS.Timeout = null;
  let mouseOnDropdownTimeout: NodeJS.Timeout = null;
  let forcedOpen = false;

  const links = {
    skills: "Skills",
    projects: "Projects",
    about: "About Website",
  };
</script>

<!-- NavBar -->
<main
  class="navbar bg-indigo-200 w-full h-12 px-6 flex flex-row align-baseline justify-between relative"
>
  <div class="gh-tag flex flex-row">
    <img
      class="h-10 w-10 rounded-full my-auto"
      src="https://avatars.githubusercontent.com/u/59821765?v=4"
      alt="My GitHub Profile Pic"
    />
    <a class="nav-label ml-2 hover:text-gray-800" href="/"> Leomotors </a>
    <a
      class="nav-label ml-2 hover:text-gray-800"
      target="_blank"
      rel="noopener"
      href="https://github.com/Leomotors"
      title="Click here to visit my GitHub Profile"
    >
      <GitHub />
    </a>
  </div>

  <!-- Navigation Menu, Unfold on big screen, Dropdown menu on small screen -->
  <div class="nav-menu flex flex-row z-10">
    {#each Object.entries(links) as [key, val]}
      <a href={`/${key}`}>{val}</a>
    {/each}
    <p
      class="dropdown-text inline sm:hidden"
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
    class={`dropdown-menu absolute right-0 top-0 p-4 bg-white rounded ${
      forcedOpen || mouseOnMenu || mouseOnDropdown
        ? "translate-y-10"
        : "opacity-0 pointer-events-none"
    } transition-all flex flex-col hover:scale-102.5 sm:hidden`}
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
      <a href={`/${key}`}>{val}</a>
    {/each}
  </div>
</main>

<!-- Website Content -->
<slot />

<style lang="postcss">
  .navbar .nav-label,
  .nav-menu > a,
  .dropdown-text {
    @apply my-auto font-medium text-lg select-none;
  }

  .dropdown-menu > a {
    @apply select-none;
  }

  .nav-menu > a {
    @apply hidden sm:inline;
  }

  .nav-menu > a,
  .dropdown-text {
    @apply mx-2 px-2 bg-gray-50 rounded hover:bg-gray-100 hover:scale-105 transition-all;
  }

  .gh-tag > a {
    @apply hover:scale-102.5 transition-transform;
  }
</style>
