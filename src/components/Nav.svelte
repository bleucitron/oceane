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
    max-height: 5rem
    box-shadow: 4px 0 4px 0 rgba(black, 0.5)

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

    &:hover, &:focus
      outline: none
      opacity: 1

  li
    margin: 0 0.5rem

    &.current a
      opacity: 1

      &::after
        opacity: 1

    a
      position: relative
      color: var(--darkest-grey)
      font-size: 1.1rem
      font-family: 'Bebas Neue', cursive
      opacity: 0.5
      transition: opacity 300ms ease-in-out

      &::after
        content: ''
        position: absolute
        width: 100%
        bottom: 0
        left: 0
        height: 3px
        background: var(--darkest-grey)
        opacity: 0
        transition: opacity 300ms ease-in-out

  .img-container
    display: flex
    width: 3rem
    margin-right: 0.5rem
    object-fit: contain
    border: 1px solid transparent

    img
      width: 100%
      margin: auto

  @include tablet
    nav
      padding: 1rem

      a
        font-size: 1.5rem

    a
      font-size: 1.5rem

    .img-container
      height: 4rem
      width: 4rem
      padding: 0.5rem
      border-radius: 50%
      border-color: var(--darkest-grey)

  @include desktop
    nav
      flex-flow: row
      justify-content: space-between


</style>
