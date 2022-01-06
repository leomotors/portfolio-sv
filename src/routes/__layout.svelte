<script>
  import "../app.css";
  import GitHub from "$lib/icons/GitHub.svelte";
</script>

<!-- NavBar -->
<main
  class="navbar bg-indigo-200 w-full h-12 px-6 flex flex-row align-baseline justify-between"
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
      href="https://github.com/Leomotors"
      title="Click here to visit my GitHub Profile"
    >
      <GitHub />
    </a>
  </div>

  <div class="nav-menu flex flex-row">
    <a href="/projects">Projects</a>
    <a href="/about">
      <span class="hidden sm:inline">About Website</span>
      <span class="inline sm:hidden">About</span>
    </a>
  </div>
</main>

<!-- Website Content -->
<slot />

<style lang="postcss">
  .navbar .nav-label,
  .nav-menu > a {
    @apply my-auto font-medium text-lg select-none;
  }

  .gh-tag > a {
    @apply hover:scale-102.5 transition-transform;
  }

  .nav-menu > a {
    @apply mx-2 px-2 bg-gray-50 rounded hover:bg-gray-100 hover:scale-105 transition-all;
  }
</style>
