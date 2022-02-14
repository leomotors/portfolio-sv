export function shorten(str: string, limit: number) {
  if (str.length > limit) {
    return str.slice(0, limit - 2) + "...";
  }
  return str;
}
