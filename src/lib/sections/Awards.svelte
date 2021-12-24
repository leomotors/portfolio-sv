<script lang="ts">
  import { awards } from "$lib/data/awards.json";

  import AwardCard from "$lib/components/AwardCard.svelte";
</script>

<div
  class="award-card bg-white rounded-xl my-4 mx-auto w-5/6 p-4 max-w-full shadow-lg"
>
  <h1 class="font-bold text-3xl">My Award</h1>
  <h2 class="text-gray-600">Award related to Computer and Technology</h2>
  <hr class="ml-6 my-2" />

  <div class="card-content">
    {#each awards as award}
      <AwardCard {award} />
    {/each}
  </div>
</div>

<style lang="postcss">
  .card-content {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
  }

  .award-card > h1,
  h2 {
    @apply text-left ml-6;
  }
</style>
