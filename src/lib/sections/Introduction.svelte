<script lang="ts">
  export let data;
</script>

<main
  class="introduction-zone w-5/6 py-8 px-4 mx-auto mt-8 bg-sky-200 rounded-2xl shadow-xl"
>
  <h1 class="font-bold text-5xl">&lt;&gt; Hi, I'm Leo! &lt;/&gt;</h1>
  <h1 class="text-3xl text-gray-800">Nutthapat Pongtanyavichai</h1>
  <h1 class="text-2xl" title="This is from my GitHub Bio">{data.bio}</h1>
  <h2 class="text-xl">
    GitHub: {data.public_repos} Public Repositories {data.followers} followers {data.following}
    following
  </h2>

  <div
    class="introduction-cards flex flex-col md:flex-row justify-around items-center lg:mx-12 mt-5"
  >
    <div class="introduction bg-pink-200">
      <h1 class="font-bold text-3xl">About me</h1>
      <table class="table-auto w-96 mx-auto">
        <tr>
          <td> 🚹 Gender </td>
          <td> Male </td>
        </tr>
        <tr>
          <td> 🔢 Age </td>
          <td> 17 </td>
        </tr>
        <tr>
          <td> 📜 Grade </td>
          <td> 12 </td>
        </tr>
        <tr>
          <td> 🏫 School </td>
          <td> Triam Udom Suksa School </td>
        </tr>
      </table>
    </div>
    <div class="introduction bg-green-200">
      <h1 class="font-bold text-3xl">What I mostly do</h1>
      <div class="card-content my-auto">
        <p>C++</p>
        <p>Discord Bot (discord.js & discord.py)</p>
        <p>Website with Svelte</p>
        <p>Flutter Android App</p>
        <p>💛 Open-Source Projects 💛</p>
      </div>
    </div>
  </div>
</main>

<style lang="postcss">
  .introduction {
    @apply py-6 px-3 flex flex-col align-middle shadow-xl;
  }

  .introduction-cards > div {
    @apply rounded-xl m-2 hover:scale-105 transition-transform;
  }

  table td {
    @apply text-left lg:text-lg xl:text-xl;
  }
  .card-content > p {
    @apply lg:text-lg xl:text-xl;
  }
</style>
