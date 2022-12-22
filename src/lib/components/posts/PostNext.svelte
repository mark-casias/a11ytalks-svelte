<script>
  import { format } from 'date-fns';
  export let props;
  const { meta, path } = props;
  const date = format(new Date(meta.date), 'MMMM yyyy');
</script>

<div class='post-next'>
  <div class='post-next__image'>
    <img
      src={meta.socialImage}
      alt={meta.subtitle}
    />
  </div>
  <div class='post-next__content'>
    <div>
      <h2 class='post-next__date' dateTime={date}>
        {date}
      </h2>
      <h3 class="post-next__speaker">{meta.subtitle}</h3>
      <h3 class='post-next__title'>
        <a class='post-next__title-link' href={path}>{meta.title}</a>
      </h3>
    </div>
    <p class='post-next__description'>{meta.description}
      <br /><br />
      <a class='post-next__readmore' href={path}>Read more<span class="sr-only"> about {meta.title}</span> &#8594;</a>
    </p>
  </div>
</div>
<hr />

<style lang="scss">
@import '../../styles/global/utils';

.post-next {
  text-align: center;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row-reverse;

  &__image {
    img {
      width: 200px;
      height: 200px;
      margin: 0 auto;
      border: 4px solid #ff9f1c;
      border-radius: 50%;
      @include breakpoint-md {
        width: 400px;
        height: 400px;
      }
    }

  }

  h2 {
    line-height: 1.5rem;
    margin-top: 1rem;
    margin-bottom: .05rem;
    text-transform: uppercase;
    color: $color-secondary;
    font-size: $typographic-huge-font-size;
    font-weight: 900;
    clear: both;

    @include breakpoint-md {
      margin-top: 0;
      float: left;
    }
  }

  &__date {
    line-height: 1.5rem;
    margin-top: 0;
    margin-bottom: .05rem;
    text-transform: uppercase;
    color: $color-accent;
    font-size: $typographic-large-font-size;
    font-weight: 500;
    float: none;
    clear: both;

    @include breakpoint-md {
      float: left;
    }
  }

  &__speaker {
    line-height: 2.4375rem;
    margin-top: 0;
    margin-bottom: 0.08125rem;
    text-transform: uppercase;
    color: #757575;
    font-size: 1.75rem;
    font-weight: 500;
    clear: both;
  }

  &__description {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  @include breakpoint-md {
    text-align: left;

    &__image {
      margin-left: 0;
      text-align: left;

      img {
        margin: 0 auto;
        float: none;
        text-align: center;
      }
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
  }
}

</style>