<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
  export let data
</script>

  {#if data.posts.length}
      <ul>
        {#each data.posts as post}
          <li>
            <a href={post.path}>
              {post.meta.title}
            </a>
          </li>
        {/each}
      </ul>
      {:else}
      <h2>No posts in {data.tag}</h2>
  {/if}