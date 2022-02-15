import firstpost from "./220215.md?raw";
import hello2 from "./hello2.md?raw";

export interface PostMeta {
  title: string;
  desc: string;
  date: string;
  content: string;
}

const posts: { [key: string]: PostMeta } = {
  firstpost: {
    title: "First Post",
    desc: "First Post, that's it",
    date: "2022-02-15",
    content: firstpost,
  },
  hello2: {
    title: "Testing Placeholder",
    desc: "Testing",
    date: "2022-02-09",
    content: hello2,
  },
};

export default posts;
