<script>
  export let data;
</script>
<h1>Tags</h1>
<ul>
  {#each data.tags as tag }
    <li><a href="/tag/{tag}">{tag}</a></li>
  {/each}
</ul>
