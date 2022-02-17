<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const res = await fetch("https://api.github.com/users/Leomotors");
    const data = await res.json();

    return {
      props: { data },
    };
  };
</script>

<script lang="ts">
  import type { Endpoints } from "@octokit/types";
  import { goto } from "$app/navigation";
  import ext from "$lib/components/ext";

  export let data: Endpoints["GET /user"]["response"]["data"];

  // Vanta.js, performance bottleneck here 😔
  import { onMount } from "svelte";
  import GLOBE from "vanta/dist/vanta.globe.min";
  let vantaRef: HTMLElement;

  onMount(() => {
    const vantaEffect = GLOBE({
      el: vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xe9e9ff, // Chino
      color: 0xefa486, // Cocoa
    });

    return () => {
      vantaEffect.destroy();
    };
  });
</script>

<main
  class="introduction-zone max-w-full pt-8 pb-4 shadow-xl"
  bind:this={vantaRef}
>
  <div
    class="head-text-box max-w-full lg:w-1/2 2xl:w-1/3 mx-auto rounded-xl py-4"
  >
    <h1 class="font-bold text-5xl">&lt;&gt; Hi, I'm Leo! &lt;/&gt;</h1>
    <h1 class="text-3xl text-gray-200">Nutthapat Pongtanyavichai</h1>
    <h1 class="text-2xl" title="This is from my GitHub Bio">{data.bio}</h1>
    <h2 class="text-xl">
      GitHub: {data.public_repos} Public Repositories {data.followers} followers
      {data.following}
      following
    </h2>
  </div>

  <div
    class="introduction-cards flex flex-col md:flex-row justify-around items-center lg:mx-12 mt-5"
  >
    <div class="introduction bg-pink-200">
      <h1 class="font-bold text-3xl mb-4">About me</h1>
      <table class="table-auto max-w-full sm:w-96 mx-auto">
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
          <td> Triam Udom Suksa School (Pending Graduation)</td>
        </tr>
      </table>
    </div>
    <div class="introduction bg-green-200">
      <h1 class="font-bold text-3xl">What I mostly do</h1>
      <div class="card-content my-auto">
        <p>C++</p>
        <p>Discord Bot (discord.js)</p>
        <p>Website with Svelte</p>
        <p>Flutter Android App</p>
        <p>💛 Open-Source Projects 💛</p>
      </div>
    </div>
  </div>

  <div class="about 2xl:mt-6 select-none">
    <button
      class="bg-white rounded-lg shadow-lg py-4 px-6 text-2xl expand"
      on:click={() => {
        goto("/about");
      }}
    >
      About
    </button>
  </div>

  <div class="vanta-credit credit-text-inline">
    3D Globe by
    <a class="hover:text-slate-500" href="https://www.vantajs.com/" {...ext}>
      Vanta.js
    </a>
  </div>
</main>

<style lang="postcss">
  /* Apparently, h-full is not working */
  /* NavBar h-12 = 3rem */
  main {
    /* Footer h-32 = 8rem */
    min-height: calc(100vh - 11rem);
    background-color: #e9e9ff;
  }

  @media (min-width: 1024px) {
    /* Footer h-16 = 4rem */
    main {
      min-height: calc(100vh - 7rem);
    }
  }

  .head-text-box {
    background-color: rgba(24, 24, 24, 0.6);
    @apply text-white;
  }

  .head-text-box > * {
    @apply my-1.5;
  }

  .introduction {
    @apply py-6 px-3 flex flex-col align-middle shadow-xl max-w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4;
  }

  .introduction-cards > div {
    @apply rounded-xl m-2 expand;
  }

  table td {
    @apply text-left lg:text-lg xl:text-xl;
  }

  td:first-child {
    @apply w-1/3;
  }

  td:last-child {
    @apply w-2/3;
  }

  .card-content > p {
    @apply lg:text-lg xl:text-xl;
  }

  .vanta-credit {
    @apply text-slate-800 !important;
  }
</style>
