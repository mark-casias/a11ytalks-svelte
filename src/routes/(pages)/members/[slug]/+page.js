export async function load({params}) {
  const member = await import(`../../../../lib/content/members/${params.slug}.md`);
  const node = member.metadata;
  return { node }
}