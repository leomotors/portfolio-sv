<script lang="ts">
  import { Award } from "$lib/data/awards.model";

  export let award: Award;
</script>

<div class="award-card hover:scale-102.5 rounded-lg shadow-lg m-4">
  <div
    class={`img w-full h-56 rounded-t-lg ${award.link ? "cursor-pointer" : ""}`}
    style={`background-image: url(${award.img})`}
    on:click={() => {
      if (award.link) window.open(award.link, "_blank", "noopener");
    }}
  />
  <div class="card-detail p-4">
    <h1 class="font-bold text-xl">{award.title}</h1>
    <h2>{award.desc}</h2>
  </div>
</div>

<style lang="postcss">
  .img {
    @apply bg-center bg-cover bg-no-repeat;
  }
</style>
