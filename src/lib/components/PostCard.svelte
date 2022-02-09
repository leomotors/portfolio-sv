<script lang="ts">
  import { goto } from "$app/navigation";

  import type { PostMeta } from "$posts";

  export let data: PostMeta;
  export let link: string;
</script>

<div
  class="card"
  on:click={() => {
    goto(link);
  }}
>
  <h1 class="font-bold text-xl">{data.title}</h1>
  <h2>{data.desc}</h2>
</div>

<style lang="postcss">
  .card {
    @apply hover:scale-102.5 rounded-lg shadow-lg m-4 p-4 h-56;
    @apply cursor-pointer rounded-lg shadow-lg transition-transform;
  }
</style>
