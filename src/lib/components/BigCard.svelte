<script lang="ts">
  export let title: string;
  export let subtitle = "";
</script>

<main class="big-card">
  <h1>{@html title}</h1>
  <h2>{@html subtitle}</h2>
  <hr />
  <div class="card-content">
    <slot />
  </div>
  <slot name="card-footer" />
</main>

<!-- Styles: bigcard.postcss -->
