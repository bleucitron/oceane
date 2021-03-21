<script>
  import { stores } from '@sapper/app';
  import Nav from '../components/Nav.svelte';

  const { page } = stores();
  const year = new Date().getFullYear();

  const quotes = [
    {
      text:
        '<p>Impose ta chance, serre ton bonheur, et va vers ton risque.</p><p>À te regarder ils s’habitueront</p>',
    },
    {
      text: "<p>On t'accompagnera si tu trouves ta route</p>",
      author: 'Eugène Guillevic',
    },
    {
      text:
        '<p>Même un voyage de mille kilomètres commence par un premier pas</p>',
      author: 'Proverbe japonais',
    },
    {
      text:
        '<p>Pour prendre son envol, il faut découvrir ce qui nous donne des ailes</p>',
      author: 'Proverbe japonais',
    },
  ];

  function getRandomQuote() {
    const n = Math.floor(Math.random() * quotes.length);
    return quotes[n];
  }

  const quote = getRandomQuote();
</script>

<header>
  <Nav />
</header>
<main class:home={$page.path === '/'}>
  <slot />
</main>

<footer>
  <figure>
    <blockquote>
      {@html quote.text}
      {#if quote.author}
        <p class="author">{quote.author}</p>
      {/if}
    </blockquote>
    <div class="img-container">
      <img
        src="/images/dawn-3358468_1920.jpg"
        alt="Des oiseaux qui s'envolent d'un arbre avec la citation 'Pour prendre son envol, il faut découvrir ce qui nous donne des ailes'"
      />
    </div>
  </figure>
  <aside>
    <div>Océane Coaching</div>
    <!-- <div>
      <a href="mailto: hello@oceanecoaching.com">hello@oceanecoaching.com</a>
    </div> -->
    <div class="copyright">© {year} | Océane Duchêne</div>
  </aside>
</footer>

<style lang="sass">
  main
    margin-top: 5rem
    padding: 0rem 1rem

    &.home
      padding: 0

  header
    position: fixed
    z-index: 3
    width: 100%
    height: 5rem
    background: white
    box-shadow: 0px 0px 5px 0px rgba(black, 0.5)

  footer
    margin-top: 2rem

    font-size: 0.7rem
    color: var(--lightest-grey)

    .img-container
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0

    figure
      position: relative
      height: 7rem
      display: flex
      padding: 1em 1.5em

    blockquote
      width: 80%
      margin: auto
      position: relative
      z-index: 1
      font-family: Caveat

    :global(p)
      text-align: center
      font-size: 1.6em
      text-shadow: 3px ​3px #000
      margin: 0

    .author
      position: absolute
      bottom: -1.5em
      right: -1em
      font-size: 1.2em


    // a
    //   color: var(--lightest-grey)

    aside
      display: flex
      flex-flow: column
      align-items: center
      justify-content: center
      height: 2.5rem
      text-align: center
      background: linear-gradient(var(--light-blue), var(--blue))

  :global(.img-container)
    display: flex
    overflow: hidden
    margin: auto
    width: 100%
    max-height: 15rem

    :global(img)
      object-fit: cover
      width: 100%
      width: 100%

  @include tablet
    header
      height: 8rem

    main
      padding: 2rem 2rem
      &.home
        padding: 2rem 4rem

      margin-top: 8rem

    footer
      aside
        height: 5rem
        font-size: 0.9rem

      figure
        height: 10rem

      blockquote
        width: 70%

      :global(p)
        max-width: 70vw
        font-size: 3em

      .author
        font-size: 1.8em
        bottom: -1.2em
        right: -1.2em

    :global(.img-container)
      max-height: unset

  @include desktop
    header
      height: 5rem

    :global(p)
      font-size: 1.1rem

    main
      width: 70%
      max-width: 100ch
      margin: auto
      margin-top: 5rem
      padding: 0

      &.home
        padding: 0

    footer
      figure
        height: 15rem

      blockquote
        width: 60%

      :global(p)
        max-width: 70vw
        font-size: 3.5em

      .author
        font-size: 2em
        bottom: -1.5em
        right: -1.5em

</style>
