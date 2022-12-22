<script>
  export let node;
  const { socialImage, name, pronouns,title, bio, callout, social } = node;
</script>

<div class="member-bio">
  <img src={socialImage} class="bio-image" alt={name} />
  <h2 class="member-bio__name">
    {name}
    {#if pronouns != ''}
      <span class="pronouns">({pronouns})</span>
    {/if}
  </h2>
  <h3 class="member-bio__title seafoam">
    {title}
  </h3>
  <div class="member-bio__body">
    { bio}
  </div>
  {#if (callout != '' || social != '')}
    <div class="member-bio__meta">
      {#if callout != ''}
        <div class="member-callout">
          <p><strong>Notable Contributions to Highlight</strong></p>
          <ul>
            {#each callout as call }
              <li>{call}</li>
            {/each}
          </ul>
        </div>
      {/if}

      {#if social }
        <div class="member-social">
          <ul class="social-links">
            <li>
              <p class="connect"><strong>Connect</strong></p>
            </li>
            {#each social as link }
              <li><a href={link.uri}>{link.name}</a></li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  {/if}

  <div class="member-bio__link">
    <a href="/about">Back to About</a>
  </div>

</div>

<style lang="scss">
.member-bio {
  padding: 4rem;

  h2 {
    margin-top: 0.67rem;
    margin-bottom: 0.67rem;
    span {
      margin-left: 1rem;
      font-size: .95rem;
    }
  }

  h3 {
    color: #29BCAD;
    margin-top: 0.67rem;
    margin-bottom: 0.67rem;
  }

  p {
    margin-bottom: 1rem;
  }

  .bio-image{
    margin-right: 2rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    border: 4px solid #ff9f1c;
    border-radius: 50%;
    text-align: center;
    max-width: 150px;
  }

  .pronouns{
    font-size: 16px;
  }
  .member-callout{
    border: 1px solid orange;
    width: 50%;
    float: left;
    padding: 1rem;
    margin-top: 1rem;
    margin-right: 4rem;
  }
  .member-bio__meta {
    display: flex;
    margin-bottom: 4rem;
  }
  .member-social{
    width: 40%;
    padding: 1rem 0;
    margin-top: 1rem;
  }
  ul.social-links {
    padding-left: 0;
    li{
      list-style-type: none;
      margin-bottom: 0;
    }
  }
  .connect{
    margin-bottom: 10px;
  }
}

</style>