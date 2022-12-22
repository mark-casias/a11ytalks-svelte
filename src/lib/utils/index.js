// Posts helper function.
export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/lib/content/posts/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(16, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  );
  const livePosts = allPosts.filter((post) => post.meta.draft != true);

  return livePosts;
}

export const fetchMarkdownMembers = async () => {
  const allPostFiles = import.meta.glob('/src/lib/content/members/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(16, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}