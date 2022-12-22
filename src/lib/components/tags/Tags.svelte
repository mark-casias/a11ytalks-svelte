<script>
  export let tags;
  console.log(tags);
</script>

<div class='tags'>
  <ul class='tags__list'>
    {#each tags as tag }
      <li class='tags__list-item'>
        <a href='/tag/{tag.toLowerCase()}' class='tags__list-item-link'>
          {tag}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">

@import '../../styles/global/utils';

.tags {
  margin-bottom: .5rem;
  display: flex;
  justify-content: center;

  &__list {
    list-style: none;
    margin: 0 -10px;
    padding: 0;

    &-item {
      display: inline-block;
      margin: 10px 5px;
      font-weight: 600;
      text-transform: uppercase;

      &-link {
        display: inline-block;
        height: $button-height;
        padding: 0 24px;
        line-height: $button-height;
        border: 1px solid $color-gray-border;
        text-decoration: none;
        border-radius: $button-border-radius;
        color: $color-base;
        background: $color-primary;
        color: $color-black;

        &:hover,
        &:focus {
          background: $color-gray-bg;
          color: $color-black;
        }
      }
    }
  }
}
</style>