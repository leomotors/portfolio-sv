<script lang="ts">
  import { schools } from "../data/Schools.json";
</script>

<main class="w-5/6 bg-white rounded shadow-xl mx-auto p-4">
  <h1 class="font-bold text-3xl text-left ml-4">Education History</h1>
  <hr class="text-gray-300 m-4" />
  <div class="card-content overflow-x-auto flex flex-row justify-evenly">
    {#each schools as school}
      <div class="school-card bg-gray-50 rounded p-2">
        {school.name}
        {school.gen}
        <p class="enroll-grad">{school.enroll}-{school.graduate}</p>
      </div>
    {/each}
  </div>
</main>
