<script lang="ts">
  import { awards } from "$lib/data/awards.json";

  import BigCard from "$lib/components/BigCard.svelte";
  import ImageCard from "$lib/components/ImageCard.svelte";
</script>

<main class="card-page">
  <h1 class="page-title">Awards and Activities</h1>

  <BigCard title="Awards" subtitle="Awards related to Computer and Technology">
    {#each awards as award}
      <ImageCard data={award} />
    {/each}
  </BigCard>

  <BigCard
    title="Activities"
    subtitle="Activities related to Computer and Technology, ex. Joining Competition / Contest"
  >
    <h1 class="text-6xl py-8 ml-4">Coming Soon</h1>
  </BigCard>
</main>
