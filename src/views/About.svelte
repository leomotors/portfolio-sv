<script lang="ts">
  import { Version, BuildTime } from "../config";
</script>

<main class="page-content">
  <h1>Website Version: {Version}</h1>
  <h1>Build Time: {BuildTime}</h1>
  <h1>
    Source Code of this Website is available on
    <a
      class="text-blue-500 hover:text-blue-600"
      href="https://github.com/Leomotors/portfolio-sv"
    >
      GitHub
    </a>
  </h1>
  <img
    src="src/assets/svelte.png"
    alt="Svelte Logo"
    class="h-24 w-auto mx-auto"
  />
</main>
