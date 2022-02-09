<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = async ({ params }) => {
    return {
      props: params,
    };
  };
</script>

<script lang="ts">
  import "$lib/styles/markdown.css";

  import { marked } from "marked";

  import posts from "$posts";

  export let postName: string;
</script>

<h1 class="page-title text-rose-600">UNDER CONSTRUCTION</h1>
<main class="flex flex-row gap-4 p-4">
  <aside>
    <div class="aside-content">
      <a href="/blog">See all posts</a>
      <h1 class="text-4xl font-bold">Content</h1>
      <ul>
        {#each Object.keys(posts) as postKey}
          <li>
            <a href="/blog/{postKey}">{posts[postKey].title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </aside>
  <div class="markdown bg-white">
    {#if postName in posts}
      {@html marked(posts[postName].content)}
    {:else}
      <p>{postName} doesn't exist!</p>
    {/if}
  </div>
</main>

<style lang="postcss">
  aside {
    @apply bg-fuchsia-200;
    flex-grow: 2;
  }

  main > div {
    flex-grow: 5;
  }

  main > * {
    @apply rounded-xl p-4;
  }
</style>
