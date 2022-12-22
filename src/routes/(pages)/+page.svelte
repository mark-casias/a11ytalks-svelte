<script>
  import PostNext from '../../lib/components/posts/PostNext.svelte';
  import PostTeaser from '../../lib/components/posts/PostTeaser.svelte';
  export let data;
  const { next, future, past } = data;
</script>

{#if next.path}
<PostNext props={next} />
{/if}

<ul>
  {#each future as post }
    <PostTeaser props={post} />
  {/each}
  {#each past as post }
    <PostTeaser props={post} />
  {/each}
</ul>

<style lang="scss">

</style>
