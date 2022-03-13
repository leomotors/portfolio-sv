<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = ({ params }) => {
    return {
      props: params,
    };
  };
</script>

<script lang="ts">
  import "highlight.js/styles/github-dark.css";
  import posts from "$posts";
  import type { PostMeta } from "$lib/types";

  import { defaultTitle } from "$lib/constants";

  export let postName: string;
  $: post = posts[postName] as PostMeta;

  let panelActive = true;
</script>

<svelte:head>
  {#if postName in posts}
    <title>{post.title}</title>
    <meta property="og:description" content={post.desc} />
  {:else}
    <title>{defaultTitle}</title>
  {/if}
</svelte:head>

<main class="flex flex-col lg:flex-row gap-4 p-4 xl:px-8 2xl:px-32 mt-8">
  <aside
    class={panelActive
      ? "w-full lg:w-1/3"
      : "w-0 opacity-0 pointer-events-none hidden lg:block"}
  >
    <div class="aside-content p-4 rounded-xl">
      <a href="/blog" class="font-medium text-xl">See all posts</a>
      <h1 class="text-4xl font-bold">Contents</h1>
      <ul class="my-3">
        {#each Object.keys(posts) as postKey}
          {@const _post = posts[postKey]}
          <li class="hover-link">
            <a href="/blog/{postKey}">{_post.title} | {_post.date}</a>
          </li>
        {/each}
      </ul>
    </div>
  </aside>

  <div
    class="content w-full {panelActive && 'lg:w-2/3'} bg-white rounded-xl p-8"
  >
    <p
      class="hidden lg:block text-left text-lg font-bold cursor-pointer hover-link"
      on:click={() => {
        panelActive = !panelActive;
      }}
    >
      {panelActive ? "<<< Hide Contents Panel" : ">>> Show Contents Panel"}
    </p>
    {#if post}
      <p class="text-left mt-2 mb-8">
        Posted at {post.date}
        {#if post.updated}
          <span class="text-slate-600">(Last Updated {post.updated})</span>
        {/if}
      </p>
      <article class="prose lg:prose-lg 2xl:prose-xl max-w-none text-left">
        {@html post.content}
      </article>
    {:else}
      <p class="py-16 text-3xl xl:text-4xl 2xl:text-5xl font-bold">
        /blog/{postName} doesn't exist!
      </p>
    {/if}
  </div>
</main>

<style lang="postcss">
  main > aside > div {
    @apply bg-gradient-to-bl from-fuchsia-200 to-fuchsia-300;
  }

  main > * {
    @apply transition-all;
  }

  .hover-link {
    @apply hover:text-gray-600;
  }
</style>
