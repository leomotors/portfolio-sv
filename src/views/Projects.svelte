<script lang="ts">
  import RepoCard from "../components/RepoCard.svelte";
  import { featured, carelessdev, big_projects } from "../data/repos.json";
</script>

<main class="sm:mx-4 md:mx-8 lg:mx-12 xl:mx-36">
  <!-- Featured GitHub Repositories -->
  <div class="big-card">
    <h1>Featured GitHub Repositories</h1>
    <h2>Project I done and is available on my main account repositories</h2>
    <hr />
    <div class="card-content">
      {#each featured as repo}
        <RepoCard {repo} />
      {/each}
    </div>
  </div>

  <!-- CarelessDev -->
  <div class="big-card">
    <h1>CarelessDev</h1>
    <h2>
      CarelessDev is where my friends and I spend time creating useless stuff,
      below is projects I have contributed to
    </h2>
    <hr />
    <div class="card-content">
      {#each carelessdev as repo}
        <RepoCard {repo} />
      {/each}
    </div>
  </div>

  <!-- Other Big Projects -->
  <div class="big-card">
    <h1>Other Big Projects</h1>
    <h2>Some Big Projects I have spend lots of time with</h2>
    <hr />
    <div class="card-content">
      {#each big_projects as repo}
        <RepoCard {repo} />
      {/each}
    </div>
  </div>
</main>

<style lang="postcss">
  .big-card {
    @apply m-4 p-4 max-w-full rounded-xl bg-white shadow-lg;
  }

  .big-card > h1 {
    @apply text-3xl font-bold text-left;
  }

  .big-card > h2 {
    @apply text-left text-gray-600;
  }

  .big-card > h1,
  .big-card > h2 {
    @apply ml-6;
  }

  .big-card > hr {
    @apply text-gray-500 mt-2 mb-1;
  }

  .big-card > .card-content {
    @apply flex flex-col md:flex-row justify-start;
  }
</style>
