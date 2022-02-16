<script lang="ts">
  import ext from "$lib/components/ext";
  import GitHub from "$lib/icons/GitHub.svelte";
  import { timeago } from "$lib/utils";

  import { Version, BuildTime } from "../../config";
</script>

<main class="w-full bg-slate-800 h-32 lg:h-16 py-2 px-6 xl:px-8 text-white">
  <div class="left flex flex-row items-center gap-2">
    <a
      class="nav-label hover:text-gray-300"
      {...ext}
      href="https://github.com/Leomotors"
      title="Click here to visit my GitHub Profile"
    >
      <GitHub size="24" />
    </a>
    <p class="font-semibold text-xl">Copyright © 2022 Leomotors</p>
  </div>

  <div class="middle text-lg" title="Version: {Version} @ {BuildTime}">
    Last Updated: {timeago(BuildTime)}
  </div>

  <div class="right flex flex-col items-center lg:items-end justify-center">
    <p>
      <a
        class="text-sky-300 hover:text-sky-200"
        href="https://github.com/Leomotors/portfolio-sv"
        {...ext}
      >
        Source Code
      </a>
      of this website
    </p>
    <p>Built with SvelteKit + TailwindCSS 🤩</p>
  </div>
</main>

<style lang="postcss">
  main {
    @apply flex flex-col lg:flex-row items-center justify-between;
  }
</style>
