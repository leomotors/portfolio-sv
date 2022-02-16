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
  import "$lib/styles/cardpage.postcss";

  import { page } from "$app/stores";

  import NavBar from "$lib/layout/NavBar.svelte";
  import Footer from "$lib/layout/Footer.svelte";

  export let status: GitHubStatus;
</script>

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
