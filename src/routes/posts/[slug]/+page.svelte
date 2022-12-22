<script>
  export let data;
  import Content from "../../../lib/components/posts/Content.svelte";
  import Tags from "../../../lib/components/tags/Tags.svelte";
  const content = data.content;
  console.log(content);
  const frontmatter = data.node.metadata;
  const tags = frontmatter.tags;
  const props = {
    meta: frontmatter,
    body: content,
  };
</script>

<main class='post'>
  <a class='post__home-button' href="/">Home</a>
  <div class='post__content'>
    <Content {props} />
  </div>
  <div class='post__footer'>
    <Tags tags={tags} />
  </div>
</main>

<style lang="scss">
  :global {
    @import '../../../lib/styles/base/generic';
  }
  @import '../../../lib/styles/global/utils';
  .post {
    &__home-button {
      display: block;
      max-width: 100px;
      height: $button-height;
      padding: 0 24px;
      line-height: $button-height;
      text-align: center;
      color: $color-base;
      border: 1px solid $color-gray-border;
      border-radius: $button-border-radius;
      font-size: $typographic-base-font-size;
      font-weight: 600;
      margin-left: auto;
      margin-right: auto;
      background: $color-accent;
      color: $color-black;
      text-transform: uppercase;
      margin-top: 1rem;

      &:hover,
      &:focus {
        color: $color-black;
        background: $color-gray-bg;
      }
      @include breakpoint-md {
        position: fixed;
        max-width: auto;
        margin: 0;
        top: 30px;
        left: 30px
      }
    }

  }
</style>
