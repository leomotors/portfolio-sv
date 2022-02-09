import hello from "./hello.md?raw";
import hello2 from "./hello2.md?raw";

export interface PostMeta {
  title: string;
  desc: string;
  date: string;
  content: string;
}

const posts: { [key: string]: PostMeta } = {
  hello: {
    title: "Hello Test 1",
    desc: "Testing",
    date: "2022-02-09",
    content: hello,
  },
  hello2: {
    title: "Hello Test 2",
    desc: "Testing",
    date: "2022-02-09",
    content: hello2,
  },
};

export default posts;
