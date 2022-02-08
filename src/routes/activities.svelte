<script lang="ts">
  import { awards } from "$lib/data/awards.json";

  import AwardCard from "$lib/components/AwardCard.svelte";
  import BigCard from "$lib/components/BigCard.svelte";
</script>

<main class="card-page">
  <h1 class="page-title">Awards and Activities</h1>

  <BigCard title="Awards" subtitle="Awards related to Computer and Technology">
    {#each awards as award}
      <AwardCard {award} />
    {/each}
  </BigCard>

  <BigCard
    title="Activities"
    subtitle="Activities related to Computer and Technology, ex. Joining Competition/Contest"
  >
    <h1 class="text-6xl">Coming Soon</h1>
  </BigCard>
</main>
