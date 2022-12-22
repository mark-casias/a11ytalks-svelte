import {isBefore} from 'date-fns';

export const load = async ({ fetch }) => {

  const response = await fetch(`/api/posts`);
  const posts = await response.json();

  // Gather future posts.
  const future = posts.filter((a) => {
    const dd = new Date();
    dd.setDate(dd.getDate() -1);
    const d = new Date(a.meta.date);
    return isBefore(dd, d);
  }).
    // Reverse sort them.
    sort((a, b) => {
      const ad = new Date(a.meta.date);
      const bd = new Date(b.meta.date);
      if (isBefore(ad, bd)) return -1;
      else return 1;
    });
  // Pop out the next one. (first in list).
  const next = future.shift();

  // Remove future posts for the rest.
  const past = posts.filter((a) => {
    const dd = new Date();
    dd.setDate(dd.getDate() - 1);
    const d = new Date(a.meta.date);
    return isBefore(d, dd);
  });

  return {
    posts,
    next,
    future,
    past
  }
}