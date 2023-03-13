import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // default options are shown
    adapter: adapter({
      // if true, will create a Netlify Edge Function rather
      // than using standard Node-based functions
      edge: false,

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app.
      // if `edge` is true, this option cannot be used
      split: false
    })
  },

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				post: 'src/routes/posts/posts.svelte'
			}
		}),
	]

};

export default config;
