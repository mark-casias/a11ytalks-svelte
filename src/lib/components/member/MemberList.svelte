<script>
  export let nodes;
  import MemberCard from "./MemberCard.svelte";
</script>

<section class="members">
  <h2>Meet Our Members</h2>
  <div class="member-grid">
    {#each nodes as card}
      <MemberCard node={card} />
    {/each}
  </div>
</section>

<style lang="scss">
.member-grid {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>