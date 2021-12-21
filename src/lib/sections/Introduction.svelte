<main class="md:flex md:flex-row justify-around max-w-full lg:mx-12 mt-5">
  <div class="introduction bg-pink-200">
    <h1>Hi! I'm Leo!</h1>
    <h2 class="mt-2 font-semibold">About me</h2>
    <table class="table-auto w-80 mx-auto">
      <tr>
        <td> 🚹 Gender </td>
        <td> Male </td>
      </tr>
      <tr>
        <td> 🔢 Age </td>
        <td> 17 </td>
      </tr>
      <tr>
        <td> 📜 Year </td>
        <td> 12 </td>
      </tr>
      <tr>
        <td> 🏫 School </td>
        <td> Triam Udom Suksa School </td>
      </tr>
    </table>
  </div>
  <div class="introduction bg-green-200">
    <h1 class="font-bold text3-xl">What I mostly do</h1>
    <div class="card-content my-auto">
      <p>C++</p>
      <p>Discord Bot (discord.js & discord.py)</p>
      <p>Website with Svelte</p>
      <p>Flutter Android App</p>
      <p>💛 Open-Source Projects 💛</p>
    </div>
  </div>
</main>

<style lang="postcss">
  .introduction {
    @apply py-6 px-3 flex flex-col align-middle shadow-xl;
  }

  .introduction > h1 {
    @apply font-bold text-3xl;
  }

  table td {
    @apply text-left;
  }

  main > div {
    @apply w-full md:w-1/2 lg:w-1/3 rounded-xl m-2 hover:scale-105 transition-transform;
  }
</style>
