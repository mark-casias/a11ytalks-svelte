<script>
  export let socialImage;
  export let name;
  export let link;
</script>

<div class="member-card">
  <img src={socialImage} class="social-image" alt={name} />
  <h3>{name}</h3>
  <a href={link}>Full Bio  →</a>
</div>

<style lang="scss">

@import '../../styles/global/utils';

.member-card{
  width: 50%;
  text-align: center;
  margin-bottom: 2rem;

  @include breakpoint-md {
    width: 33%;
  }

  .social-image{
    width: 60%;
    margin: 1rem auto;
    float: none;
    text-align: center;
  }
  h3{
    margin-top: 0;
    margin-bottom: .5rem;
    font-size: 1.2rem;
    text-align: center;
  }
}

</style>