<script lang="ts">
  import PastelArrow from "$lib/components/PastelArrow.svelte";
  import { schools } from "$lib/data/Schools.json";
  const totalSchools = schools.length;
</script>

<main class="mx-auto w-5/6 rounded-xl bg-white px-4 shadow-xl">
  <h1 class="ml-4 pt-4 text-left text-3xl font-bold">Education History</h1>
  <hr class="mx-4 mt-4 text-gray-300" />
  <div
    class="card-content align-center flex flex-col justify-evenly overflow-x-hidden py-6 md:flex-row"
  >
    {#each schools as school, index}
      <div
        class="school-card mx-auto mt-4 max-w-full rounded bg-gray-200 shadow-xl expand sm:w-72 md:mx-2 md:mt-0 xl:w-80 2xl:w-96"
      >
        <div
          class="card-image h-32 w-full rounded-t bg-cover bg-center hover:cursor-pointer xl:h-40 2xl:h-48"
          style="background-image: url({school.image})"
          on:click={() => {
            school.website && window.open(school.website, "_blank", "noopener");
          }}
          title="Click to go to {school.name}'s Website"
        />
        <div class="card-content p-2.5">
          <p class="school-name">{school.name} {school.gen}</p>
          <p class="enroll-grad">
            {school.level},
            {school.enroll}-{school.graduate}
          </p>
          {#if school.gpax}
            <p class="school-gpax font-bold">GPAX: {school.gpax}</p>
          {/if}
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
    @apply text-xl font-bold;
  }
</style>
