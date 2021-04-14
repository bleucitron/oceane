<script>
  import { slide } from 'svelte/transition';
  import { stores } from '@sapper/app';
  import { outsideClick } from '../helpers';

  const { page } = stores();

  let open = false;
</script>

<header
  on:click={() => (open = false)}
  on:touchend={() => (open = false)}
  use:outsideClick={() => (open = false)}
>
  <nav>
    <div class="main">
      <a class="home" href="/">
        <div class="img-container">
          <img src="/images/logo-small.png" alt="Logo" />
        </div>
        <p>Océane Duchêne</p>
      </a>
      <ul>
        <li
          class:current={$page.path.startsWith('/le-coaching')}
          on:click|stopPropagation={() => (open = !open)}
          on:touchend|stopPropagation={() => (open = !open)}
          class:active={open}
        >
          <div>Le coaching</div>
        </li>
        <li class:current={$page.path === '/qui-suis-je'} class:inactive={open}>
          <a href="/qui-suis-je">Qui suis-je ?</a>
        </li>
        <li class:current={$page.path === '/tarifs'} class:inactive={open}>
          <a href="/tarifs">Tarifs</a>
        </li>
        <li class:current={$page.path === '/contact'} class:inactive={open}>
          <a href="/contact">Contact</a>
        </li>
        <!-- <li class:inactive={open}>
          <a href="/contact">Blog</a>
        </li> -->
      </ul>
    </div>
    {#if open}
      <ul class="submenu" transition:slide>
        <li class:current={$page.path === '/le-coaching'}>
          <a href="/le-coaching">Qu'est ce que c'est ?</a>
        </li>
        <li class:current={$page.path === '/le-coaching/bien-etre'}>
          <a href="/le-coaching/bien-etre">Bien-être</a>
        </li>
        <li class:current={$page.path === '/le-coaching/sexualite-positive'}>
          <a href="/le-coaching/sexualite-positive">Sexualité positive</a>
        </li>
        <li class:current={$page.path === '/le-coaching/eco-responsabilite'}>
          <a href="/le-coaching/eco-responsabilite">Éco-responsabilité</a>
        </li>
      </ul>
    {/if}
  </nav>
</header>

<style lang="sass">
  header
    position: fixed
    z-index: 3
    width: 100%
    // height: 5rem
    background: white
    box-shadow: 0px 0px 5px 0px rgba(black, 0.5)

  ul, .main
    display: flex
    align-items: center

  .main
    flex-flow: column


  nav
    padding: 1rem
    padding-bottom: 0
    max-width: 65rem

    a
      color: inherit
      display: flex
      align-items: center

      p
        margin: 0
        font-size: 1.2rem
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
      &.home
        text-transform: uppercase

  ul
    margin: 0.5rem 0
    margin-bottom: 0.2rem
    align-items: flex-start

  a
    text-decoration: none
    transition: opacity 300ms ease-in-out, color 300ms ease-in-out

    &:hover, &:focus
      outline: none
      color: var(--pink)

  .submenu
    display: flex
    flex-flow: column
    align-items: flex-start
    width: 100%
    margin: 0
    margin-left: 1rem

    li
      margin: 0.3rem 0
      font-size: 0.9rem
      font-family: 'Bebas Neue', sans-serif

  li
    margin: 0 0.4rem
    color: var(--grey)
    font-size: 1rem
    font-family: 'Bebas Neue', sans-serif
    transition: opacity 0.2s ease-in
    cursor: pointer

    &:first-child
      margin-left:0
    &:last-child
      margin-right:0

    &.current a, &.current div
      color: var(--pink)

    &.inactive
      opacity: 0.5


    a
      position: relative

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
    header
      // height: 8rem
    nav
      width: fit-content
      margin: auto
      padding: 1rem
      padding-bottom: 0.5rem

      a p
        font-size: 1.5rem

      li
        font-size: 1.5rem
        margin: 0 1rem

    .submenu
      margin-left: 1.5rem

      li
        font-size: 1.2rem

    .img-container
      width: 6rem
      max-height: unset
      padding: 0.5rem
      border-radius: 50%

  @include desktop
    header
      // height: 5rem
      .home
        margin-right: 5rem

    .main
      flex-flow: row

    .submenu
      width: fit-content
      margin: auto

    nav
      margin: auto
      flex-flow: row
      justify-content: space-between

      li
        margin: 0 1rem

    .img-container
      width: 5rem

</style>
