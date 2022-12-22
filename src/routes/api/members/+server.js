// src/routes/api/members/+server.js
import { fetchMarkdownMembers } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allMembers = await fetchMarkdownMembers()

  const sorted = allMembers.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })
  console.log(allMembers)
  ;

  return json(sorted)
}