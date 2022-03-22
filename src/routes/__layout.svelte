<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  import { GitHubProfileStatus, UserStatus } from "github-profile-status";
  import emoji from "node-emoji";

  import type { GitHubStatus } from "$lib/types";

  export const load: Load = async () => {
    const profileStatus = new GitHubProfileStatus({
      token: import.meta.env.VITE_GITHUB_ACCESS_TOKEN as string,
    });
    const status = (await profileStatus.get()) ?? ({} as UserStatus);

    return {
      props: {
        status: {
          emoji: emoji.emojify(status.emoji),
          message: status.message,
        },
      },
    };
  };
</script>

<script lang="ts">
  import "../app.css";
  import "$lib/styles/global.postcss";
  import "$lib/styles/bigcard.postcss";
  import "$lib/styles/cardpage.postcss";

  import { page } from "$app/stores";

  import NavBar from "$lib/layout/NavBar.svelte";
  import Footer from "$lib/layout/Footer.svelte";

  import { defaultTitle } from "$lib/constants";

  export let status: GitHubStatus;
</script>

<svelte:head>
  <!-- Default Title for all pages (except named blog) -->
  {#if !$page.url.pathname.includes("blog/")}
    <title>{defaultTitle}</title>
  {/if}
</svelte:head>

<NavBar {status} />

<main class:notindex={$page.url.pathname != "/"}>
  <slot />
</main>

<Footer />

<style lang="postcss">
  /* NavBar h-12 = 3rem */
  main {
    /* Footer h-32 = 8rem */
    min-height: calc(100vh - 11rem);
  }

  @media (min-width: 1024px) {
    /* Footer h-16 = 4rem */
    main {
      min-height: calc(100vh - 7rem);
    }
  }

  .notindex {
    @apply pb-6;
  }
</style>
