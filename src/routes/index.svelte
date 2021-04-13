<script>
</script>

<h1>Accueil</h1>
<div class="img-container logo">
  <img src="/images/logo.png" alt="Océane logo" />
</div>

<section>
  <a href="/coaching/bien-etre"><h2>Coaching Bien-être</h2></a>

  <div class="img-container">
    <img
      src="/images/tea-time-3240766_1920.jpg"
      alt="Books and a cup of tea on a table"
    />
  </div>
  <div class="content">
    <p>
      Une écoute et un parcours <strong>adaptés à chacun</strong>, pour vous
      accompagner dans l'atteinte de <strong>vos objectifs</strong> personnels et
      professionnels.
    </p>
  </div>
</section>

<section>
  <h2>Coaching Sexualité</h2>
  <div class="img-container">
    <img src="/images/belly-3186730_1920.jpg" alt="A flower on a belly" />
  </div>
  <div class="content">
    <p>
      Parce que l'épanouissement personnel passe aussi par une
      <strong>reconnexion à son intimité</strong>
      et à ses désirs, je vous accompagne et vous conseille dans la quête d'une
      <strong>sexualité positive et joyeuse</strong>.
    </p>
  </div>
</section>

<section>
  <h2>Coaching Éco-responsabilité</h2>
  <div class="img-container">
    <img src="/images/belly-3186730_1920.jpg" alt="A flower on a belly" />
  </div>
  <div class="content">
    <p>
      Un accompagnement <strong>pas à pas</strong> pour vous aider à mettre en
      place au quotidien les éco-gestes <strong>qui vous ressemblent.</strong>
    </p>
  </div>
</section>

<style lang="sass">
  h1
    display: none

  a
    color: inherit
    &:hover, &:focus
      text-decoration: none

      h2
        box-shadow: 0px 0px 20px 0px rgba(black, 0.5)

  .logo
      margin: 2rem auto
      width: 75%

  section
    .img-container
      z-index: -1

    &:nth-of-type(2)
      h2
        background: var(--pink)

  @include tablet
    .logo
      margin: 3rem auto
      margin-bottom: 5rem
      width: 50%

    section:nth-of-type(2)
      align-items: flex-end

      .img-container
        left: 0
        right: unset

    @include desktop
</style>
