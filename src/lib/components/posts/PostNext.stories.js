import PostNextComponent from './PostNext.svelte';
import postData from './posts.js';

export default {
  title: 'Posts/Post Next',
}

export const PostNext = () => ({
  Component: PostNextComponent,
  props: {
    props: postData
  },
});