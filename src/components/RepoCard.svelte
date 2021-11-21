<script lang="ts">
  import { Repo } from "../data/repos.model";

  export let repo: Repo;
</script>

<main
  class="repo-card hover:scale-102.5"
  on:click={() => {
    window.open(repo.url, "_blank");
  }}
>
  <div
    class={`img w-full h-56${repo.bgtl ? " bgtl" : ""}`}
    style={`background-image: url(${repo.img})`}
  />
  <div class="card-detail">
    <h1 class="font-bold text-xl">{repo.name}</h1>
    <h2>{repo.desc}</h2>
  </div>
</main>

<style lang="postcss">
  .repo-card {
    @apply w-full md:w-1/2 lg:w-1/4 xl:w-1/5;
    @apply rounded-xl shadow-lg m-4;
    @apply transition-transform;
    transition-duration: 0.5;
    @apply cursor-pointer;
  }

  .img {
    @apply bg-cover bg-center bg-no-repeat rounded-t-xl;
  }

  .bgtl {
    @apply bg-left-top;
  }

  .card-detail {
    @apply p-4;
  }
</style>
