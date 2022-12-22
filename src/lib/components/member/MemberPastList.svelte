<script>
  export let nodes;
</script>
<section class="past-members">
  <h2>Past Volunteers</h2>
  <div class="past-members-grid">
    {#each nodes as node }
      <div class="volunteer">
      <a href={node.frontmatter.social[0].uri} target="_blank" rel="noreferrer" name={`${node.frontmatter.social[0].name} for ${node.frontmatter.name}`}>
        {node.frontmatter.name}
      </a>
    </div>
    {/each}
  </div>
</section>

<style lang="scss">
@import '../../styles/global/utils';

.past-members{
  padding-top: 2rem;

  .past-members-grid {
    display: flex;
    .volunteer {
      padding-left: 1rem;
      width: 100%;
      @include breakpoint-sm {
        width: 33%;
      }
    }
    a {
      &:after {
        content: '→';
        padding-left: 1rem;
      }
    }
  }
}

</style>