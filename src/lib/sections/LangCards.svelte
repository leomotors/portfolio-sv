<script lang="ts">
  import Accordion from "$lib/components/Accordion.svelte";

  let active = -1;

  function setActive(index: number) {
    return () => {
      if (active == index) active = -1;
      else active = index;
    };
  }
</script>

<div
  class="lang-cards flex flex-col items-center justify-center px-6 lg:flex-row"
>
  <div class="lang-card">
    <h1>Language</h1>
    <hr />
    <div class="card-content p-4">
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
        subtitle="Good User"
      >
        <p>Duolingo English Test 125 (Equiv. Approx. IELTS 7-7.5)</p>
      </Accordion>

      <Accordion
        active={active == 2}
        on:titleclick={setActive(2)}
        title="Japanese"
        subtitle="JLPT N5"
      >
        <p>2020年12月 合格 (パーセンタイル 92.8)</p>
      </Accordion>
    </div>
    <h2 class="card-footer px-4 pb-4 text-sm text-gray-500">
      Yes, this is my language skill. Isn't this what you are expecting?
    </h2>
  </div>

  <div class="lang-card">
    <h1>Programming Language</h1>
    <hr />

    <div class="card-content p-2 py-4">
      <p>List of Programming Language I frequently use</p>
      <p class="langs">C C++ JavaScript TypeScript Python Dart</p>
      <p>
        List of other Programming Language I ever learned
        <span class="text-gray-600"> (Most likely forgotten) </span>
      </p>
      <p class="langs">C# Java Kotlin Go</p>
      <p class="italic">&lsquo;Programming Language&rsquo;</p>
      <p class="langs">HTML CSS SCSS Svelte</p>
    </div>
  </div>
</div>

<style lang="postcss">
  .lang-card {
    @apply m-12 w-full rounded-lg bg-white shadow-lg expand md:w-2/3 xl:w-2/5 2xl:w-1/3;
  }

  .lang-card > h1 {
    /* Card Title */
    @apply p-2 text-2xl font-semibold;
  }

  .lang-card > hr {
    /* Card Line */
    @apply mx-4 text-gray-300;
  }

  .langs {
    @apply text-lg font-bold;
  }
</style>
