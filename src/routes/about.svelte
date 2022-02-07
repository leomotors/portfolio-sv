<script lang="ts">
  import { BuildTime } from "../config";
</script>

<h1 class="page-title p-12">About Website</h1>
<main class="page-content p-3 sm:p-6 md:p-12 lg:px-24">
  <blockquote>
    <h1>Built At: {BuildTime}</h1>
    <h1>
      Source Code of this Website is available on
      <a
        class="text-blue-500 hover:text-blue-600"
        href="https://github.com/Leomotors/portfolio-sv"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
    </h1>
  </blockquote>

  <blockquote>
    <h1>JavaScript Framework: SvelteKit with SSR</h1>
    <h1>CSS Framework: Tailwind</h1>
    <h1>PaaS: Vercel</h1>
    <h1>
      UI: Manually Built
      <span class="text-2xl">(No Framework, only Tailwind and Svelte)</span>
    </h1>
  </blockquote>

  <blockquote>
    <h2>
      If you have any suggestion for my website, you can submit issue at above
      repository
    </h2>
  </blockquote>
</main>

<style lang="postcss">
  main h1 {
    @apply text-3xl sm:text-4xl font-semibold;
  }

  main h2 {
    @apply text-2xl sm:text-3xl font-medium;
  }

  blockquote {
    @apply bg-emerald-150 mx-auto my-4 max-w-full lg:w-2/3 p-6 rounded-3xl hover:scale-102.5 transition-transform;
  }
</style>
