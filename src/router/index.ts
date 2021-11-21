import Home from "../views/Home.svelte";
import About from "../views/About.svelte";
import Projects from "../views/Projects.svelte";

const routes = [
  {
    name: "/",
    component: Home,
  },
  {
    name: "about",
    component: About,
  },
  {
    name: "projects",
    component: Projects,
  },
];

export { routes };
