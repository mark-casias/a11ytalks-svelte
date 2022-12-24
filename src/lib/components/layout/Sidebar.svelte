<script>
  export let isIndex = false;
  import Author from './sidebar/Author.svelte';
  import Menu from './sidebar/Menu.svelte';
  import Contacts from './sidebar/Contacts.svelte';
  import Copyright from './sidebar/Copyright.svelte';
</script>

<aside class='sidebar'>
  <div class='sidebar__inner'>
    <Author {isIndex} />
    <Menu />
    <Contacts />
    <Copyright />
  </div>
</aside>

<style lang="scss">
  .sidebar {
    width: 25vw;

    &__inner {
      position: relative;
      padding: 1.5rem;

      &::after {
        background: #757575;
        position: absolute;
        content: "";
        width: 0.0625rem;
        height: auto;
        top: 30px;
        right: -10px;
        bottom: 30px;
      }
    }
  }
</style>