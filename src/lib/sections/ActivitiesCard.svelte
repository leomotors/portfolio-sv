<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<main
  class="big-picture-card"
  style="background-image: url(images/awards.webp)"
>
  <button
    class="big-picture-nav"
    on:click={() => {
      goto("/activities");
    }}
  >
    <h1>My Awards and Activities >>></h1>
  </button>
  <p class="credit-text">Picture by Parents Empowering Parents</p>
</main>

<style lang="postcss">
  .credit-text {
    @apply text-slate-800;
  }
</style>
