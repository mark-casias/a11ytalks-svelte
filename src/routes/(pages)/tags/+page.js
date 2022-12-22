// src/routes/blog/category/[category]/+page.js
export const load = async ({ fetch, params }) => {

  const response = await fetch(`/api/posts`)
  const allPosts = await response.json()

  const allTags = allPosts
    .map(post => post.meta.tags)
    .flat();
  const tags = allTags.filter((a, i) => {
    return allTags.indexOf(a) === i;
  }).sort();

  return {
    tags
  }
}