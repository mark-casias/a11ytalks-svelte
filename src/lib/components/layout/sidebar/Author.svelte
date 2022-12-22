<script>
  export let isIndex = false;
  export let author = {
    name: 'A11yTalks',
    photo: '/photo.png',
    bio: 'Virtual meet-up featuring speakers & conversations around digital accessibility',
  };
</script>

<style lang="scss">

@import '../../../styles/global/utils';

.author {
  text-align: center;

  &__photo {
    display: inline-block;
    margin-bottom: 0;
    border-radius: 50%;
    background-clip: padding-box
  }

  &__title {
    font-size: $typographic-base-font-size * 2.5;
    font-weight: 600;
    line-height: 1.125rem;
    margin: .5rem, 0, .5rem, 0;

    &-link {
      color: $color-primary;

      &:hover,
      &:focus {
        color: $color-gray-bg;
      }

    }

  }

  &__subtitle {
    color: $color-gray-bg;
    line-height: 1rem;
    margin-bottom: .5rem;
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: center;
  }

  @media (prefers-color-scheme: light) {
    &__title-link {
      color: $color-black;

      &:hover,
      &:focus {
        color: $color-black;
        text-shadow: inherit;
      }
    }

    &__subtitle {
      color: $color-black;
    }
  }

}
</style>

<div class='author'>
  <a href="/">
    <img
      src={author.photo}
      class='author__photo'
      width="75"
      height="75"
      alt={author.name}
    />
  </a>

    {#if isIndex == 'true'}
      <h1 class='author__title'>
        <a class='author__title-link' href="/">{author.name}</a>
      </h1>
    {:else}
      <h2 class='author__title'>
        <a class='author__title-link' href="/">{author.name}</a>
      </h2>
    {/if}
    <p class='author__subtitle'>{author.bio}</p>
  </div>