import firstpost from "./220215.md";

export interface PostMeta {
  title: string;
  desc: string;
  date: string;
  content: string;
}

const posts: { [key: string]: PostMeta } = {
  testing: {
    title: "Testing",
    desc: "Test Markdown",
    date: "2022-02-15",
    content: firstpost,
  },
};

export default posts;
