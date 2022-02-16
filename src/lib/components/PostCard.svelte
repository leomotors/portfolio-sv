<script lang="ts">
  import { goto } from "$app/navigation";

  import type { PostMeta } from "$posts";

  export let data: PostMeta;
  export let link: string;
</script>

<div
  class="card flex flex-col justify-center"
  on:click={() => {
    goto(link);
  }}
>
  <h1 class="font-bold text-2xl">{data.title}</h1>
  <h2>{data.desc}</h2>
  <h2>{data.date}</h2>
</div>

<style lang="postcss">
  .card {
    @apply expand-sm rounded-lg shadow-lg m-4 p-4 h-56 cursor-pointer;
  }
</style>
