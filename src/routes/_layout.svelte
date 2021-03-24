<script>
  import { stores } from '@sapper/app';
  import Nav from '../components/Nav.svelte';

  const { page } = stores();
  const year = new Date().getFullYear();

  const quotes = [
    {
      text:
        '<p>Accompagner quelqu’un, c’est se placer ni devant, ni derrière, ni à la place.</p><p>C’est être à côté.</p>',
      author: 'Joseph Templier',
    },
    {
      text:
        '<p>Impose ta chance, serre ton bonheur, et va vers ton risque.</p><p>À te regarder ils s’habitueront</p>',
      author: 'René Char',
    },
    {
      text:
        "<p>L'homme qui déplace une montagne commence par déplacer les petites pierres</p>",
      author: 'Confucius',
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
      author: 'Nicolas Proupain',
    },
    {
      text:
        '<p>La vie heureuse est celle qui s’accorde avec sa propre nature</p>',
      author: 'Sénèque',
    },
    {
      text:
        '<p>Si on veut obtenir quelque chose que l’on n’a jamais eu, il faut tenter quelque chose que l’on n’a jamais fait</p>',
      author: 'Périclès',
    },
    {
      text:
        '<p>Il n’est jamais trop tard pour être ce que vous auriez dû être</p>',
      author: 'George Eliot',
    },
    {
      text:
        '<p>Fais du bien à ton corps pour que ton âme ait envie d’y rester</p>',
      author: 'Proverbe indien',
    },
    {
      text: '<p>Soyez vous-même, tous les autres sont déjà pris</p>',
      author: 'Oscar Wilde',
    },
    {
      text:
        '<p>La vie mettra des pierres sur ton chemin.</p><p>A toi de décider si tu en fais un mur ou un pont.</p>',
      author: 'Anonyme',
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
  header
    position: fixed
    z-index: 3
    width: 100%
    height: 5rem
    background: white
    box-shadow: 0px 0px 5px 0px rgba(black, 0.5)

  main
    margin-top: 5rem
    // padding: 0rem 1rem
    padding: 0

    :global(h1)
      margin: 1.5em 0
      font-size: 1.5em
      text-align: center

    :global(p a)
      color: var(--pink)
      text-decoration: none
    :global(p a:visited)
      color: var(--blue)

    :global(p)
      margin: 1.5rem 0
    :global(p:last-child)
      margin-bottom: 3rem

    :global(section)
      position: relative
      margin: 2em 0

    :global(section .img-container)
      width: 100%

    :global(section img)
      filter: opacity(70%)

    :global(.content)
      padding: 0 1rem

    :global(h2)
      position: sticky
      top: 5rem
      margin: 1.5rem 0
      margin-bottom: 0
      background: white
      z-index: 1
      font-size: 1.2em
      font-weight: bold
      padding: 0.5em
      padding-left: 1em
      background: var(--blue)
      color: white
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
      margin-top: 8rem

      &.home
        padding: 2rem 4rem

      :global(h1)
        font-size: 2em
        margin-top: 1em
        margin-bottom: 2em

      :global(h2)
        position: unset
        padding-left: 0.5em
        margin-bottom: 0.5em
        width: 70%
        text-align: center

      :global(section)
        margin-top: 2rem
        display: flex
        flex-flow: column

      :global(section .img-container)
        position: absolute
        top: 0
        width: 35%
        right: 0
        border-radius: 8px
        overflow: hidden

      :global(.content)
        padding: 0
        width: 60%
        margin-left: 1rem

    footer
      margin-top: 4rem

      aside
        height: 5rem
        font-size: 0.9rem

      figure
        height: 10rem

      blockquote
        width: 70%

      :global(p), :global(li)
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

    :global(p), :global(li)
      font-size: 1.1rem

    main
      width: 70%
      max-width: 100ch
      margin: auto
      margin-top: 5rem
      padding: 0

      :global(h1)
        margin: 2em 0
        font-size: 2.5em

      &.home
        padding: 0

    footer
      margin-top: 8rem

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
