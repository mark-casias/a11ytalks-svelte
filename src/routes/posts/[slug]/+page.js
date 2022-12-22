export async function load({ params }) {

  const post = await import(`../../../lib/content/posts/${params.slug}.md`);
  const { title, date } = post.metadata;
  const content = post.default;
    return {
      node: post,
      content,
      title,
      date,
    };

}