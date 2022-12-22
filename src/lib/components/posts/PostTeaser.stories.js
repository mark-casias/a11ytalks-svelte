import PostTeaserComponent from './PostTeaser.svelte';
import postData from './posts.js';

export default {
  title: 'Posts/Post Teaser',
}

export const PostTeaser = () => ({
  Component: PostTeaserComponent,
  props: {
    props: postData
  }
})