<script lang="ts">
  import { Version, BuildTime } from "../config";
</script>

<main class="page-content p-3 sm:p-6 md:p-12 lg:p-24">
  <h1>Website Version: {Version}</h1>
  <h1>Build Time: {BuildTime}</h1>
  <h1>
    Source Code of this Website is available on
    <a
      class="text-blue-500 hover:text-blue-600"
      href="https://github.com/Leomotors/portfolio-sv"
      target="_blank"
    >
      GitHub
    </a>
  </h1>
  <h1>Frontend Framework: Svelte + Vite ( + TypeScript)</h1>
  <h1>CSS Framework: Tailwind</h1>
</main>

<style lang="postcss">
  main > h1 {
    @apply text-4xl font-semibold;
  }
</style>
