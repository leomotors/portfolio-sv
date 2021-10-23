<script lang="ts">
  import Chevron from "../icons/Chevron.svelte";

  export let active: boolean;

  export let title: string;
  export let subtitle: string;
</script>

<div
  class={`title mx-2 px-2 flex flex-row justify-between align-baseline ${
    active ? "ring-2" : "not-active"
  }`}
>
  <div class="titles select-none">
    <span class="font-semibold">{title}</span>
    <span class="text-gray-500">{subtitle}</span>
  </div>
  <Chevron open={active} />
</div>

{#if active}
  <div class="content px-4 py-2 mt-2 mx-1.5 text-left bg-gray-100 rounded">
    <slot />
  </div>
{/if}
