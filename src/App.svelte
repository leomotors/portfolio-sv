<script lang="ts">
  import { Router } from "svelte-router-spa";
  import { routes } from "./router";

  import NavBar from "./sections/NavBar.svelte";
</script>

<main class="text-center">
  <NavBar />
  <Router {routes} />
</main>
