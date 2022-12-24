<script>
  const contacts = {
      email: 'mailto:accessibilitytalks@gmail.com',
      youtube: 'https://www.youtube.com/c/accessibilitytalks',
      twitter: 'https://www.twitter.com/A11yTalks',
      github: 'https://github.com/cehfisher/accessibility-talks',
      // rss: '',
      // linkedin: '',
      oc: 'https://opencollective.com/a11ytalks',
  }
  import Icon from "../../Icon.svelte";
  import getIcon from "../../../utils/getIcon";
</script>

<style lang="scss">
@import '../../../styles/global/utils';
.contacts {
  text-align: center;
  margin-bottom: 1rem;

  &__list {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
    margin: 10px -3px;
    width: 100%;

    &-item {
      display: flex;

      &-link {
        color: $color-base;
        border-radius: 50%;
        border: 1px solid $color-gray-border;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        height: $button-height;
        width: $button-height;
        line-height: $button-height;
        background: $color-primary;

        &:hover,
        &:focus {
          color: $color-black;
          background: $color-gray;
        }

      }

    }

  }

  @media (prefers-color-scheme: light) {    &__list-item-link {
      color: $color-black;
      background: $color-gray-bg;
    }
  }

}

</style>

<div class='contacts'>
  <ul class='contacts__list'>
    {#each Object.entries(contacts) as [name, value]}
      <li class="contacts__list-item">
        <a class="contacts__list-item-link" href={value} rel="noopener noreferrer" target="_blank">
          <Icon name={name} icon={getIcon(name)} />
        </a>
      </li>
    {/each}
  </ul>
</div>
