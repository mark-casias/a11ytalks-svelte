export const load = async ({ fetch }) => {
  const response = await fetch(`/api/members`)
  const posts = await response.json()

  return {
    posts
  }
}