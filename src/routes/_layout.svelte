<script>
  import { stores } from '@sapper/app';
  import Nav from '../components/Nav.svelte';

  const { page } = stores();
  const year = new Date().getFullYear();
</script>

<header>
  <Nav />
</header>
<main class:home={$page.path === '/'}>
  <slot />
</main>

<footer>
  <div class="img-container">
    <img
      src="/images/BAN1.jpg"
      alt="Des oiseaux qui s'envolent d'un arbre avec la citation 'Pour prendre son envol, il faut découvrir ce qui nous donne des ailes'"
    />
  </div>
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
    background: linear-gradient(var(--light-blue), var(--blue))

    font-size: 0.7rem
    color: var(--lightest-grey)

    // a
    //   color: var(--lightest-grey)

    aside
      display: flex
      flex-flow: column
      align-items: center
      justify-content: center
      height: 2.5rem
      text-align: center

  :global(.img-container)
    width: 100%
  :global(img)
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

  @include desktop
    header
      height: 5rem

    main
      width: 70%
      max-width: 100ch
      margin: auto
      margin-top: 5rem
      padding: 0

      &.home
        padding: 0

    :global(p)
      font-size: 1.1rem
</style>
