<script lang="ts">
  const colors = [200, 300, 400, 500];
</script>

<div
  class="pastel-arrow my-auto font-bold text-6xl hidden lg:flex flex-row select-none arrow-wrapper"
>
  {#each colors as color}
    <span class={`text-blue-${color}`}>&gt;</span>
  {/each}
</div>
