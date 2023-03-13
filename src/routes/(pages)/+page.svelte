<script>
  import { paginate, PaginationNav } from 'svelte-paginate'

  import PostNext from '../../lib/components/posts/PostNext.svelte';
  import PostTeaser from '../../lib/components/posts/PostTeaser.svelte';

  export let data;
  const { next, future, past } = data;
  let items = [...future, ...past];
  let currentPage = 1
  let pageSize = 4
  $: paginatedItems = paginate({ items, pageSize, currentPage })
</script>

{#if next}
<PostNext props={next} />
{/if}

{#each paginatedItems as post}
  <PostTeaser props={post} />
{/each}

  <PaginationNav
    totalItems="{items.length}"
    pageSize="{pageSize}"
    currentPage="{currentPage}"
    limit="{1}"
    showStepOptions="{true}"
    on:setPage="{(e) => {
      currentPage = e.detail.page
    }}" />

