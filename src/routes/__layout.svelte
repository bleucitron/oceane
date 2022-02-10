<script>
  import { page } from '$app/stores';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import { titleByPath } from '../helpers';

  let baseTitle = 'Océane coaching';

  $: path = $page.url.pathname;
  $: isHome = path === '/';

  $: title = isHome
    ? `${baseTitle} - Coach en bien-être et sexualité`
    : `${baseTitle} - ${titleByPath[path]}`;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Header />
<main class:home={isHome}>
  <slot />
</main>
<Footer />

<style lang="sass">
  :global
    @import "../sass/global.sass"

  main
    margin-top: 5rem
    // padding: 0rem 1rem
    padding: 0

    :global

      h1
        margin: 1.5em 0
        font-size: 1.5em
        text-align: center

      a
        color: var(--pink)
        text-decoration: none
      a:hover, a:focus
        outline: none
        text-decoration: underline

      p
        margin: 1.5rem 0
        line-height: 1.4em
      p:last-child
        margin-bottom: 3rem

      section
        display: flex
        flex-flow: column
        position: relative
        margin: 2em 0

      section .img-container
        width: 100%

      section img
        filter: opacity(70%)

      .content
        padding: 0 1.5rem

      a.button
        margin: 0 auto
        padding: 0.7em 1.5em
        font-size: 1.2em
        color: white
        background: var(--pink)
        border-radius: 0.5em

        &:hover, &:focus
          box-shadow: 0px 0px 5px 0px rgba(black, 0.5)
          text-decoration: none

      h2
        position: sticky
        top: 4.5rem
        margin: 1.5rem 0
        margin-bottom: 0
        background: white
        width: 100%
        z-index: 1
        font-size: 1.2em
        font-weight: bold
        padding: 0.5em
        padding-left: 1em
        background: var(--blue)
        color: white
        box-shadow: 0px 0px 5px 0px rgba(black, 0.5)

      ul
        padding-left: 1.5em
        list-style: disc

      li
        margin: 0.5em 0

  :global
    .img-container
      display: flex
      overflow: hidden
      margin: auto
      width: 100%

    img
      object-fit: contain
      width: 100%
      height: 100%

  @include tablet
    main
      padding: 2rem 2rem
      margin-top: 8rem

      &.home
        padding: 2rem 4rem

      :global
        h1
          font-size: 2em
          margin-top: 1em
          margin-bottom: 2em

        h2
          position: unset
          padding-left: 0.5em
          margin-bottom: 0.5em
          width: 70%
          text-align: center

        section
          margin-top: 2rem
          display: flex
          flex-flow: column

        section .img-container
          position: absolute
          top: 0
          width: 35%
          right: 0
          border-radius: 8px
          overflow: hidden

        .content
          padding: 0
          width: 60%
          margin-left: 1rem

    :global
      .img-container
        max-height: unset

  @include desktop
    :global
      p, li
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

</style>
