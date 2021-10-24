<script lang="ts">
  import { Router } from "svelte-router-spa";
  import { routes } from "./router";

  import NavBar from "./sections/NavBar.svelte";
</script>

<NavBar />
<Router {routes} />
