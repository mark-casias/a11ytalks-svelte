<script>
  import { format } from 'date-fns';
  export let props;
  const { meta, path } = props;
  const date = format(new Date(meta.date), 'MMMM yyyy')
</script>
<div class='post-teaser'>
  <div class='post-teaser__meta'>
    <time class='post-teaser__date' dateTime={date}>
      {date}
    </time>
    <span class='post-teaser__meta-divider' />
  </div>
  <h2 class='post-teaser__title'>
    <a class='post-teaser__title-link' href={path}>{meta.title}</a>
  </h2>
  <div class='post-teaser__content'>
    <div class='post-teaser__image'>
      <img
        src={meta.socialImage}
        class='social-image'
        alt=""
      />
      <h3 class='post-teaser__subtitle'>{meta.subtitle}</h3>
    </div>
    <p class='post-teaser__description'>{meta.description}<br /><br />
      <a class='post-teaser__link' href={path}>Read more<span class="sr-only"> about {meta.title}</span> &#8594;</a>
    </p>
  </div>
  <hr class="hr-last" />
</div>

<style lang="scss">
  @import '../../styles/global/utils';

.post-teaser {
  text-align: center;
  padding: 1rem 2rem;
  clear: both;
  @include breakpoint-md {
    text-align: left;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: $typographic-small-font-size;
    color: $color-gray-bg;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
  }

  hr {
    clear: both;
  }

  &:last-child {
    margin-bottom: 0.5rem;

    & hr {
      display: none !important;
    }
  }

  &__date {
    font-size: 1rem;
    color: #6f6f6f;
    font-weight: 600;
    text-transform: uppercase;
    clear: both;
  }

  &__title {
    font-size: $typographic-base-font-size * 1.6875;
    line-height: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.5rem;

    &-link {
      color: $color-primary;

      &:hover,
      &:focus {
        color: $color-gray-bg;
      }
    }
  }

  &__image {
    max-width: 200px;
    text-align: center;

    @include breakpoint-md {
      margin-right: 2rem;
    }
    img {
      margin-top: 0.5rem;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      text-align: center;
      border: 4px solid #ff9f1c;
      border-radius: 50%;
      @include breakpoint-md {
        width: 200px;
        height: 200px;
        margin-right: 2rem;
        margin-bottom: 1rem;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include breakpoint-md {
      justify-content: flex-start;
      flex-direction: row;
    }
  }

  &__description {
    font-size: $typographic-base-font-size;
    line-height: 1;
    margin-bottom: 0.75rem;
    margin-top: 0.5rem;
    @include breakpoint-md {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  &__link {
    font-size: 1rem;
    color: red;
    margin-bottom: 2.5rem;

    & .sr-only {
      clip: rect(0 0 0 0);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      height: 0.0625rem;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 0.01rem;
    }
  }

  &__meta {

    &-divider {
      margin: 0 5px;
    }
  }


  @media (prefers-color-scheme: light) {
    &__title-link {
      color: $color-black;

      &:hover,
      &:focus {
        color: $color-primary;
      }
    }

    h3 {
      color: $color-gray-border;
    }
  }
}

</style>