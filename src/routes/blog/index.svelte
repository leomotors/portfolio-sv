<script lang="ts">
  import posts from "$posts";
  import BigCard from "$lib/components/BigCard.svelte";
  import PostCard from "$lib/components/PostCard.svelte";
</script>

<main class="card-page">
  <h1 class="page-title">Blog Posts</h1>

  <BigCard title="All Posts" subtitle="Sorted by Latest Post">
    {#each Object.entries(posts) as [postKey, data]}
      <PostCard {data} link="/blog/{postKey}" />
    {/each}
  </BigCard>
</main>
