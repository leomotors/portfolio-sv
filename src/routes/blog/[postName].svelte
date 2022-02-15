<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = async ({ params }) => {
    return {
      props: params,
    };
  };
</script>

<script lang="ts">
  // import "$lib/styles/markdown.css";
  import { marked } from "marked";
  import posts from "$posts";

  export let postName: string;
</script>

<h1 class="page-title">Under Construction</h1>
<main class="flex flex-row gap-4 p-4 mt-8">
  <aside class="w-1/3">
    <div class="aside-content p-4 rounded-xl">
      <a href="/blog" class="font-medium text-xl">See all posts</a>
      <h1 class="text-4xl font-bold">Contents</h1>
      <ul class="my-3">
        {#each Object.keys(posts) as postKey}
          {@const post = posts[postKey]}
          <li class="hover:text-gray-600">
            <a href="/blog/{postKey}">{post.title} | {post.date}</a>
          </li>
        {/each}
      </ul>
    </div>
  </aside>

  <div class="content w-2/3 bg-white rounded-xl">
    {#if postName in posts}
      <article class="prose prose-lg 2xl:prose-xl text-left p-8">
        {@html marked(posts[postName].content)}
      </article>
    {:else}
      <p>{postName} doesn't exist!</p>
    {/if}
  </div>
</main>

<style lang="postcss">
  main > aside > div {
    @apply bg-gradient-to-bl from-fuchsia-200 to-fuchsia-300;
  }
</style>
