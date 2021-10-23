<script lang="ts">
  import GitHub from "../icons/GitHub.svelte";
</script>

<main
  class="NavBar bg-indigo-200 w-full h-12 flex flex-row align-baseline justify-between"
>
  <div class="gh-tag flex flex-row">
    <img
      class="h-10 w-10 rounded-full my-auto ml-6"
      src="https://avatars.githubusercontent.com/u/59821765?v=4"
      alt="My GitHub Profile Pic"
    />
    <a class="nav-label pl-2 hover:text-gray-800" target="_blank" href="/">
      Leomotors
    </a>
    <a
      class="nav-label pl-2 hover:text-gray-800"
      target="_blank"
      href="https://github.com/Leomotors"
    >
      <GitHub />
    </a>
  </div>

  <a class="nav-label pr-6" href="/about">About Website</a>
</main>

<style lang="postcss">
  .NavBar .nav-label {
    @apply my-auto font-medium text-lg;
  }
</style>
