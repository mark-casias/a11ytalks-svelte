import ContentComponent from './Content.svelte';
import postData from './posts.js';
console.log(postData);

export default {
  title: 'Posts/Full Post',
}

export const FullPost = () => ({
  Component: ContentComponent,
  props: {
    props: postData
  }
});