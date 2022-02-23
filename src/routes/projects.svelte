<script lang="ts">
  import BigCard from "$lib/components/BigCard.svelte";
  import ext from "$lib/components/ext";
  import RepoCard from "$lib/components/RepoCard.svelte";

  import { featured, carelessdev, big_projects } from "$lib/data/repos.json";
</script>

<main class="card-page">
  <h1 class="page-title">My Projects</h1>
  <h2 class="page-subtitle">
    Projects related to Programming and Technology I have done
  </h2>

  <!-- Featured GitHub Repositories -->
  <BigCard
    title="Featured GitHub Repositories"
    subtitle="Some of Amazing projects I have done and is available on my individual
  GitHub Account"
  >
    <p slot="card-footer" class="text-left ml-6">
      For all of my repositories, you may visit my
      <a href="https://github.com/Leomotors?tab=repositories" {...ext}>
        GitHub Account
      </a>
      or
      <a href="https://repos.leomotors.vercel.app/" {...ext}> this website </a>
    </p>
    {#each featured as repo}
      <RepoCard data={repo} />
    {/each}
  </BigCard>

  <!-- CarelessDev -->
  <BigCard
    title="CarelessDev"
    subtitle="CarelessDev is where my friends and I spend time creating useless stuff,
  below is projects I have contributed to"
  >
    {#each carelessdev as repo}
      <RepoCard data={repo} />
    {/each}
  </BigCard>

  <!-- Other Big Projects -->
  <BigCard
    title="Other Big Projects"
    subtitle="Some Big Projects I have spend lots of time with"
  >
    {#each big_projects as repo}
      <RepoCard data={repo} />
    {/each}
  </BigCard>
</main>

<style lang="postcss">
  a {
    @apply text-blue-700 hover:text-pink-600;
  }
</style>
