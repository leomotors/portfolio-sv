<script lang="ts">
  import type { RepoData } from "$lib/data/repos.model";
  import LangIcons from "$lib/data/lang_icons.json";

  import ImageCard from "./ImageCard.svelte";

  export let data: RepoData;

  const lang = LangIcons[data.language];
</script>

<ImageCard {data}>
  {#if lang}
    <div class="lang-icon" style="background-image: url({lang})" />
  {/if}
</ImageCard>

<style lang="postcss">
  .lang-icon {
    @apply bg-center bg-contain bg-no-repeat cursor-pointer absolute;
    @apply w-12 h-12 top-2.5 right-2.5 rounded;
  }
</style>
