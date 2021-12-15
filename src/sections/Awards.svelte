<script lang="ts">
  import { awards } from "../data/awards.json";

  import AwardCard from "../components/AwardCard.svelte";
</script>

<div
  class="award-card bg-white rounded-xl my-4 mx-auto w-5/6 p-4 max-w-full shadow-lg"
>
  <h1 class="text-left font-bold text-3xl ml-6">My Award</h1>
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
</style>
