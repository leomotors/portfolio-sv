// * Import from latest posts
import introduction from "./220217.md";
import testing from "./220215.md";

import type { PostMeta } from "$lib/types";

const posts: { [key: string]: PostMeta } = {
  introduction,
  testing,
};

export default posts;
