<script>
  import SvelteMarkdown from 'svelte-markdown'
  export let props;
  const { meta, body } = props;
  let before = true;
</script>

<div class="content">
  <h1 class="content__title">{meta.title}</h1>
  <h2 class="content__subtitle">{meta.subtitle}</h2>
  <div class="content__body">

    <SvelteMarkdown source={body} />
  </div>
  <div class="content__meta">
    {#if meta.youtube != ''}
      <iframe title={meta.title} src={`https://www.youtube.com/embed/${meta.youtube}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    {:else}
      {#if meta.preview}
        <img class="content__preview" src={meta.preview} alt={`Preview image for ${meta.title} session. Image repeats title and description above, with an image of the speaker.`} />
      {/if}
    {/if}
    {#if meta.footnote }
      <div class="content__footnote">* {meta.footnote}</div>
    {/if}
    {#if meta.calendar && !before}
      <ul class="calendar">
        <li class="calendar__list-item">
          <a target="_blank" rel="noreferrer" href={meta.calendar}>Add to Google Calendar</a>
        </li>
      </ul>
    {/if}

    {#if meta.recorded && meta.speaker}<hr />{/if}

    {#if meta.recorded}
      <p class="content__meta-date">
        <b>{before ? "Recorded" : "Recording"}:</b> {meta.recorded}
      </p>
    {/if}
    {#if meta.speaker}
      <p class="content__speaker-data">
        <b>Speaker:</b> {meta.speaker}
        {#if meta.speakerContact}
          <span class="speakerContact">({meta.speakerContact.name} - {meta.speakerContact.contact})</span>
        {/if}
      </p>
    {/if}
  </div>
</div>

<style lang="scss">
  @import '../../styles/global/utils';

.content {
  max-width: $layout-post-single-width;
  padding: 0 15px;
  margin: 0 auto;

  &__title {
    font-size: $typographic-base-font-size * 2;
    max-width: $layout-post-width;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    text-align: center;
    color: $color-primary;
    line-height: 1.65rem;
    margin-top: 1rem;
    margin-bottom: 0;

    @media (prefers-color-scheme: light) {
      color: $color-black;
    }
  }

  &__subtitle {
    font-size: $typographic-base-font-size * 1;
    max-width: $layout-post-width;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    text-align: center;

    line-height: 1rem;
    margin-top: .5rem;
    margin-bottom: 0;
  }

  &__meta {
    margin: 0 auto;
    text-align: center;
    word-break: break-word;

    & ul {
      text-align: left;

      & li {
        float: left;

        &:last-child {
          margin-bottom: 1rem;
        }
      }
    }

    & a {
      text-decoration: underline
    }

    & * {
      max-width: $layout-post-width;
      margin-left: auto;
      margin-right: auto
    }

    & img {
      max-width: 100%;
    }

  }

}

@include breakpoint-md {
  .content {
    padding: 0;

    &__title {
      font-size: $typographic-base-font-size * 3;
      line-height: 3rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    &__subtitle {
      font-size: $typographic-base-font-size * 1.5;
      text-transform: uppercase;
      line-height: 1.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    &__body {
      font-size: $typographic-base-font-size * 1.125;
      line-height: 1.125rem;
      margin-bottom: 1.125rem;
    }

  }

}

</style>