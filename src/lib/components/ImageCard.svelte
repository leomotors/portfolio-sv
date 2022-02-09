<script lang="ts">
  import type { CardData } from "$lib/data/card.model";

  export let data: CardData;
</script>

<div class="card hover:scale-102.5 rounded-lg shadow-lg m-4">
  <div
    class={`img ${data.link ? "cursor-pointer" : ""} ${
      data.bgtl ? "bg-left-top" : "bg-center"
    }`}
    style={`background-image: url(${data.img})`}
    on:click={data.link &&
      (() => {
        window.open(data.link, "_blank", "noopener");
      })}
  >
    <slot />
  </div>
  <div class="card-detail p-4">
    <h1 class="font-bold text-xl">{data.title}</h1>
    <h2>{data.desc}</h2>
  </div>
</div>

<style lang="postcss">
  .card {
    @apply rounded-lg shadow-lg m-4 transition-transform;
  }

  .img {
    @apply w-full h-56 bg-cover rounded-t-lg bg-no-repeat relative;
  }
</style>
