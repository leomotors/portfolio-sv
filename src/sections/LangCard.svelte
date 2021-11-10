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

<main
  class="shadow-lg w-full md:w-2/3 lg:w-1/3 xl:w-1/4 bg-white rounded m-12 hover:scale-105 transition-transform"
>
  <h1 class="p-2 font-semibold">Language</h1>
  <hr class="text-gray-300 mx-4" />
  <div class="card-content p-2">
    <Accordion
      active={active == 0}
      on:titleclick={setActive(0)}
      title="Thai"
      subtitle="Native"
    >
      This is my native Language
    </Accordion>

    <Accordion
      active={active == 1}
      on:titleclick={setActive(1)}
      title="English"
      subtitle="not that good"
    >
      This is my secondary Language
    </Accordion>

    <Accordion
      active={active == 2}
      on:titleclick={setActive(2)}
      title="Japanese"
      subtitle="JLPT N5"
    >
      <p>2020年12月 合格</p>
      <p>今年12月はN4を受けに行きます</p>
    </Accordion>
  </div>
  <h2 class="card-footer text-gray-500 px-4 pb-4 text-xs">
    Yes, this is my language skill. Isn't this what you are expecting?
  </h2>
</main>
