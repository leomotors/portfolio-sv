<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<main class="big-card">
  <h1>{title}</h1>
  <h2>{subtitle}</h2>
  <hr />
  <div class="card-content">
    <slot />
  </div>
  <slot name="card-footer" />
</main>

<style lang="postcss">
  .big-card {
    @apply m-4 p-4 max-w-full rounded-xl bg-white shadow-lg;
  }

  .big-card > h1 {
    @apply text-3xl font-bold text-left;
  }

  .big-card > h2 {
    @apply text-left text-gray-600;
  }

  .big-card > h1,
  .big-card > h2 {
    @apply ml-6;
  }

  .big-card > hr {
    @apply text-gray-300 mt-2 mb-1 mx-4;
  }

  .big-card > .card-content {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4;
  }
</style>
