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
  }
</style>