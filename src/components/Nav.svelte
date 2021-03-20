<script>
  import { stores } from '@sapper/app';
  const { page } = stores();

  // $: console.log('Page', $page.path);

  const links = [
    { href: '/qui-suis-je', label: 'Qui suis-je?' },
    { href: '/le-coaching', label: 'Le coaching' },
    { href: '/contact', label: 'Contact' },
  ];
</script>

<nav>
  <a href="/">
    <div class="img-container">
      <img src="/images/logo-small.png" alt="Logo" />
    </div>
    Océane Duchêne
  </a>
  <ul>
    {#each links as { href, label }}
      <li class:current={href === $page.path}><a {href}>{label}</a></li>
    {/each}
  </ul>
</nav>

<style lang="sass">
  ul, nav
    display: flex
    align-items: center

  nav
    display: flex
    flex-flow: column
    padding: 1rem
    padding-bottom: 0

    a
      color: inherit
      display: flex
      align-items: center

      font-size: 1.2rem
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
      text-transform: uppercase

  ul
    margin: 0.5rem 0

  a
    text-decoration: none
    transition: opacity 300ms ease-in-out, color 300ms ease-in-out

    &:hover, &:focus
      outline: none
      color: var(--pink)

  li
    margin: 0 0.5rem

    &.current a
      &::after
        color: var(--grey)

    a
      position: relative
      color: var(--grey)
      font-size: 1.1rem
      font-family: 'Bebas Neue', cursive

      &::after
        content: ''
        position: absolute
        width: 100%
        bottom: 0
        left: 0
        height: 3px
        background: transparent
        transition: opacity 300ms ease-in-out

  .img-container
    display: flex
    width: 3rem
    max-height: 2rem
    margin-right: 0.5rem
    object-fit: contain
    border: 1px solid transparent

    img
      width: 100%
      margin: auto

  @include tablet
    nav
      padding: 1rem
      padding-bottom: 0.5rem

      a
        font-size: 1.5rem

    a
      font-size: 1.5rem

    .img-container
      width: 6rem
      max-height: unset
      padding: 0.5rem
      border-radius: 50%

  @include desktop
    nav
      width: 70%
      margin: auto
      padding: 1rem
      flex-flow: row
      justify-content: space-between

      li
        margin: 0 1rem

    .img-container
      width: 5rem


</style>
