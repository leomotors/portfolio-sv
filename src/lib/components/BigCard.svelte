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
</main>
