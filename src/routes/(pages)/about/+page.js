export const load = async ({ fetch }) => {
  const response = await fetch(`/api/members`)
  const posts = await response.json();
  const past = posts.filter(n => n.meta.current !== true);
  const current = posts.filter(n => n.meta.current === true);

  return {
    posts,
    past,
    current,
  }
}