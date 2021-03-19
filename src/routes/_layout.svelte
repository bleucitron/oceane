<script>
  import Nav from '../components/Nav.svelte';

  const year = new Date().getFullYear();
</script>

<header>
  <Nav />
</header>
<main>
  <slot />
</main>
<footer>
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
    padding: 2rem

  header
    box-shadow: 0px 0px 5px 0px rgba(black, 0.5)

  footer
    display: flex
    height: 2.5rem
    background: linear-gradient(var(--light-blue), var(--blue))

    font-size: 0.7rem
    color: var(--lightest-grey)

    // a
    //   color: var(--lightest-grey)

    aside
      text-align: center
      margin: auto

  @include tablet
    footer
      height: 5rem
      font-size: 0.9rem

  @include desktop
    main
      width: 70%
      margin: auto
</style>
