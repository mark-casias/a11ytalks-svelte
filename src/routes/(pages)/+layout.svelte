<script>
    import Sidebar from "../../lib/components/layout/Sidebar.svelte";
</script>
<style lang="scss">
:global {
  @import '../../lib/styles/base/generic';
}
.layout {
    display: inline-grid;
    grid-template-columns: 2;
    padding: 2rem;

    main {
      grid-column: 2;
      margin-left: 2rem;
    }

    slot {
        display: block;
    }
}

</style>

<div class='layout'>
  <Sidebar />
  <main>
    <slot />
  </main>
</div>
