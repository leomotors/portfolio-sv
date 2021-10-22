<script lang="ts">
  import { Router } from "svelte-router-spa";
  import { routes } from "./router";

  import NavBar from "./components/NavBar.svelte";
</script>

<main class="text-center">
  <NavBar />
  <Router {routes} />
</main>

<style lang="scss">
</style>
