<script lang="ts">
  import PastelArrow from "$lib/components/PastelArrow.svelte";
  import { schools } from "$lib/data/Schools.json";
  const totalSchools = schools.length;
</script>

<main class="w-5/6 bg-white rounded-xl shadow-xl mx-auto px-4">
  <h1 class="font-bold text-3xl text-left ml-4 pt-4">Education History</h1>
  <hr class="text-gray-300 mx-4 mt-4" />
  <div
    class="card-content overflow-x-hidden flex flex-col md:flex-row align-center justify-evenly py-6"
  >
    {#each schools as school, index}
      <div
        class="school-card bg-gray-200 w-72 xl:w-80 2xl:w-96 mx-auto mt-4 md:mt-0 md:mx-2 rounded shadow-xl hover:scale-105 transition-transform"
      >
        <div
          class="card-image w-full h-32 xl:h-40 2xl:h-48 bg-cover bg-center rounded-t hover:cursor-pointer"
          style={`background-image: url("${school.image}")`}
          on:click={() => {
            school.website && window.open(school.website, "_blank", "noopener");
          }}
          title={`Click to go to ${school.name}'s Website`}
        />
        <div class="card-content p-2.5">
          <p class="school-name">{school.name} {school.gen}</p>
          <p class="enroll-grad">{school.enroll}-{school.graduate}</p>
        </div>
      </div>

      {#if index < totalSchools - 1}
        <PastelArrow />
      {/if}
    {/each}
  </div>
</main>

<style lang="postcss">
  .school-name {
    @apply font-bold text-xl;
  }
</style>
