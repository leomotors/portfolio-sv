<script lang="ts">
  import { Repo } from "$lib/data/repos.model";
  import LangIcons from "$lib/data/lang_icons.json";

  export let repo: Repo;
</script>

<main
  class="repo-card hover:scale-102.5"
  on:click={() => {
    window.open(repo.url, "_blank", "noopener");
  }}
>
  <div
    class={`img w-full h-56 ${repo.bgtl ? "bgtl" : ""}`}
    style={`background-image: url(${repo.img})`}
  >
    <div
      class="lang-icon"
      style={`background-image: url(${LangIcons[repo.language]})`}
    />
  </div>
  <div class="card-detail">
    <h1 class="font-bold text-xl">{repo.name}</h1>
    <h2>{repo.desc}</h2>
  </div>
</main>

<style lang="postcss">
  .repo-card {
    @apply rounded-lg shadow-lg m-4;
    @apply transition-transform;
    transition-duration: 0.5;
    @apply cursor-pointer;
  }

  .img,
  .lang-icon {
    @apply bg-center bg-no-repeat;
  }

  .img {
    @apply bg-cover rounded-t-lg relative;
  }

  .img > .lang-icon {
    @apply bg-contain absolute  w-12 h-12 top-4 right-4 rounded;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .bgtl {
    @apply bg-left-top;
  }

  .card-detail {
    @apply p-4 select-none;
  }
</style>
