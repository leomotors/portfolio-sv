<script lang="ts">
  import Accordion from "../components/Accordion.svelte";

  let active = -1;

  function setActive(index: number) {
    return () => {
      if (active == index) active = -1;
      else active = index;
    };
  }
</script>

<main class="shadow-lg w-72 border-black border-2 rounded m-12">
  <h1 class="p-2">Language</h1>
  <hr />
  <div class="card-content p-2">
    <div on:click={setActive(0)}>
      <Accordion active={active == 0} title="Thai" subtitle="Native">
        This is my native Language
      </Accordion>
    </div>
    <div on:click={setActive(1)}>
      <Accordion active={active == 1} title="English" subtitle="IELTS ?.?">
        This is my secondary Language
      </Accordion>
    </div>
    <div on:click={setActive(2)}>
      <Accordion active={active == 2} title="Japanese" subtitle="JLPT N5">
        <p>2020年12月 合格</p>
        <p>今年12月はN4を受けに行きます</p>
      </Accordion>
    </div>
  </div>
</main>

<style lang="postcss">
  .card-content > div {
    @apply my-2;
  }
</style>
