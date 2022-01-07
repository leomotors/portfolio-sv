<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  const dispatch = createEventDispatcher();

  import Chevron from "$lib/icons/Chevron.svelte";

  export let active: boolean;

  export let title: string;
  export let subtitle: string;
</script>

<div
  class={`title m-2 px-2 flex flex-row justify-between align-baseline ${
    active ? "ring-2" : "not-active"
  } rounded cursor-pointer`}
  on:click={() => {
    dispatch("titleclick");
  }}
>
  <div class="titles select-none">
    <span class="font-semibold">{title}</span>
    <span class="text-gray-500">{subtitle}</span>
  </div>
  <Chevron open={active} />
</div>

{#if active}
  <div
    class="content px-4 py-2 mt-2 mx-1.5 text-left bg-gray-100 rounded"
    transition:fade={{ duration: 150 }}
  >
    <slot />
  </div>
{/if}
