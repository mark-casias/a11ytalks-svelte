<script>
  const menu = [
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'Mission',
      path: '/mission'
    },
    {
      label: 'Accessibility',
      path: '/accessibility'
    },
    {
      label: 'All Tags',
      path: '/tags'
    },
    {
      label: 'Calendar',
      path: '/calendar'
    },
    {
      label: 'Code of Conduct',
      path: '/conduct'
    },
    {
      label: 'Sponsorship',
      path: '/sponsorship'
    },
    {
      label: 'Store',
      path: 'https://www.redbubble.com/people/a11ytalks/works/39136088-accessibility-a11y-cats',
      external: true
    }
  ];
  import { page } from '$app/stores';
  let active = false;
  if ($page.url.pathname === menu[5].path) {
    active = true;
  }

</script>

<style lang="scss">
@import '../../../styles/global/utils';
.menu {

  margin-bottom: 2rem;
  text-align: center;

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;

    a {
      color: $color-secondary;
      font-weight: 600;
      text-decoration: none;
    }

    &-item {
      padding: 0;
      margin: 10px 0;

      &-link {
        font-size: $typographic-base-font-size;
        color: $typographic-base-font-color;
        font-weight: normal;
        border: 0;

        &:hover,
        &:focus {
          color: $color-primary;
        }

        &.active {
          color: $color-base;
        }
      }
    }
  }

  @media (prefers-color-scheme: light) {
    &__list-item-link {
      color: $color-primary;
    }
  }
}

</style>

<nav class='menu'>
  <ul class='menu__list'>
    {#each menu as item }
      <li class='menu__list-item'>
        {#if item.external === true}
          <a
            class="menu__list-item-link"
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        {:else}
          <a
            class="menu__list-item-link"
            class:active="{$page.url.pathname == item.path}"
            href={item.path}
          >{item.label}</a>
        {/if}
      </li>
    {/each}
  </ul>
</nav>