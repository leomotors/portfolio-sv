<script>
  import BigCard from "$lib/components/BigCard.svelte";
  import SkillCard from "$lib/components/SkillCard.svelte";
  import ext from "$lib/components/ext";

  import {
    proglang,
    webtech,
    appframework,
    others,
  } from "$lib/data/skills.json";
  import About from "./about.svelte";
</script>

<main class="card-page">
  <h1 class="page-title">My Skills</h1>

  <header class="big-card text-left">
    <h1>Stars Definition</h1>
    <hr />
    <div class="content px-8 py-4 text-xl font-semibold">
      <p>1⭐ - Have learned / Finished a <em>basic</em> course</p>
      <p>
        2⭐ - Have written a program (that is not from tutorial) with that
        language/technology
      </p>
      <p>
        3⭐ - Done a sized project with that language/technology, can use that
        language/technology quite good
      </p>
      <p>
        4⭐ - Have done many sized project with that language/technology, know
        many aspects of it and can use it proficiently
      </p>
      <p>
        5⭐ - 4 Stars but relatively better proficient and more frequently used
        compared to others
      </p>
      <p>6⭐ - Know everything of it</p>

      <p>
        List of all my GitHub Repositories
        <a
          {...ext}
          href="https://repos.leomotors.vercel.app/"
          class="text-blue-700"
        >
          here
        </a>
      </p>
    </div>
  </header>

  <BigCard
    title="Programming Language"
    subtitle="<em>Programming Language</em> I have learn"
  >
    {#each proglang as data}
      <SkillCard {data} />
    {/each}
  </BigCard>

  <BigCard title="Web Technologies" subtitle="Things related to Website">
    {#each webtech as data}
      <SkillCard {data} />
    {/each}
  </BigCard>

  <BigCard title="App Framework" subtitle="Native<del>?</del> App Framework">
    {#each appframework as data}
      <SkillCard {data} />
    {/each}
  </BigCard>

  <BigCard title="Miscellanous" subtitle="Other uncategorized skills">
    {#each others as data}
      <SkillCard {data} />
    {/each}
  </BigCard>
</main>
