<script>
  import { quotes } from '../helpers';

  const year = new Date().getFullYear();

  function getRandomQuote() {
    const n = Math.floor(Math.random() * quotes.length);
    return quotes[n];
  }

  const quote = getRandomQuote();
</script>

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
      display: flex
      overflow: hidden
      margin: auto
      width: 100%
      max-height: 15rem

      img
        object-fit: cover
        width: 100%
        height: 100%


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
      text-shadow: black 0 0 10px
      margin: 0

    .author
      position: absolute
      bottom: -1.5em
      right: -1em
      font-size: 1.2em

    aside
      display: flex
      flex-flow: column
      align-items: center
      justify-content: center
      height: 2.5rem
      text-align: center
      background: linear-gradient(var(--light-blue), var(--blue))

  @include tablet
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

  @include desktop
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
