<script lang="ts">
  import { Award } from "../data/awards.model";

  export let award: Award;
</script>

<div class="award-card hover:scale-102.5 rounded-lg shadow-lg m-4">
  <div class="img w-full h-56" style={`background-image: url(${award.img})`} />
  <div class="card-detail p-4 select-none">
    <h1 class="font-bold text-xl">{award.title}</h1>
    <h2>{award.desc}</h2>
  </div>
</div>

<style lang="postcss">
  .img {
    @apply bg-center bg-cover bg-no-repeat;
  }
</style>
