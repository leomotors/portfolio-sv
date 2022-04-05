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
  class="introduction-zone max-w-full pt-8 pb-4 shadow-xl relative"
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

  <div class="introduction-card w-full lg:w-3/5 2xl:w-2/5">
    <p>
      I am 17 Years Old Student about to Graduate from Triam Udom Suksa (High
      School)
    </p>
    <br />
    <p>
      What I mostly do are C++, Discord Bot (discord.js), Website with Svelte,
      Flutter Android App and 💛 Open-Source Projects 💛
    </p>
  </div>

  <div class="about 2xl:mt-6 select-none mb-8">
    <button
      class="bg-white rounded-lg shadow-lg py-4 px-6 text-2xl expand"
      on:click={() => goto("/about")}
    >
      About Me
    </button>
  </div>

  <div class="vanta-credit credit-text">
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

  .introduction-card {
    @apply rounded-xl shadow-xl bg-gradient-to-br from-pink-200 to-green-100 p-8 my-6 mx-auto;
  }

  .introduction-card > p {
    @apply font-medium lg:text-xl text-left;
  }

  .vanta-credit {
    @apply text-slate-800 !important;
  }
</style>
