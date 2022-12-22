<script>
  export let data;
  const { node } = data;
  import Member from "../../../../lib/components/member/Member.svelte";
</script>
<Member {node} />