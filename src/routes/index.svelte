<script>
</script>

<h1>Accueil</h1>
<div class="img-container logo">
  <img src="/images/logo.png" alt="Océane logo" />
</div>

<section>
  <h2>Coaching Bien-être</h2>

  <div class="img-container">
    <img
      src="/images/tea-time-3240766_1920.jpg"
      alt="Books and a cup of tea on a table"
    />
  </div>
  <div class="content">
    <p>Remettez <strong>vos envies</strong> au cœur de votre vie.</p>
    <p>
      Atteindre vos objectifs, reprendre confiance en vous, trouver l'équilibre
      entre vie pro et vie perso.
    </p>
    <p>
      En cette période plus que jamais, vous ressentez le besoin de prendre soin
      de vous, de reprendre le contrôle sur votre vie ? Des événements
      extérieurs sont venus chambouler votre équilibre et vous souhaitez
      remettre de l'ordre dans tout cela ?
    </p>
    <p>
      Vous voulez avancer, mais vos petites voix intérieures vous parasitent
      l'esprit et vous hésitez.
    </p>
    <p>
      Je suis là pour vous écouter et vous accompagner pas à pas vers l'
      <strong>atteinte de vos objectifs</strong>.
    </p>
    <p>Ensemble, mettons le cap sur ce qui compte vraiment pour vous !</p>
  </div>
</section>

<section>
  <h2>Coaching Sexualité</h2>
  <div class="img-container">
    <img src="/images/belly-3186730_1920.jpg" alt="A flower on a belly" />
  </div>
  <div class="content">
    <p>Il n'y a pas une sexualité, mais de<b>s</b> sexualité<b>s</b>.</p>
    <p>Quelle est la votre ?</p>
    <p>
      Confrontés à la sur-représentation d'une sexualité normée, il est parfois
      difficile de s'y reconnaître, laissant la place aux questionnements, aux
      doutes, à la perte de confiance en soi.
    </p>
    <p>
      Comment se libérer de l'injonction à la performance et jouir pleinement
      d'une <strong>sexualité saine et joyeuse</strong> ?
    </p>
    <p>
      Découverte de votre sexualité, peur de ne pas être à la hauteur, troubles
      de l'érection, perte de libido, rapport au corps, retrouver l'intimité du
      couple après une grossesse ou une période difficile, questions sur des
      pratiques concrêtes...
    </p>
    <p>
      Quelque soit votre besoin je vous accompagne et vous conseille pour
      (re)trouver une sexualité épanouie et épanouissante !
    </p>
  </div>
</section>

<style lang="sass">
  h1
    display: none

  // p
  //   margin: 1.5rem 0
  //   &:last-child
  //     margin-bottom: 3rem

  .logo
      margin: 2rem auto
      width: 75%

  section:nth-of-type(2)
    h2
      background: var(--pink)

  // .content
  //   padding: 0 1rem

  // h2
  //   position: sticky
  //   top: 5rem
  //   margin: 1.5rem 0
  //   margin-bottom: 0
  //   background: white
  //   z-index: 1
  //   font-size: 1.2em
  //   font-weight: bold
  //   padding: 0.5em
  //   padding-left: 1em
  //   background: var(--blue)
  //   color: white
  //   box-shadow: 0px 0px 5px 0px rgba(black, 0.5)

  @include tablet
    .logo
      margin: 3rem auto
      margin-bottom: 5rem
      width: 50%

    // h2
    //   position: unset
    //   padding-left: 0.5em
    //   margin-bottom: 0.5em
    //   width: 70%
    //   text-align: center

    // section
    //   margin-top: 2rem
    //   display: flex
    //   flex-flow: column

    //   .img-container
    //     position: absolute
    //     top: 0
    //     width: 35%
    //     right: 0
    //     border-radius: 8px
    //     overflow: hidden

    section:nth-of-type(2)
      align-items: flex-end

      .img-container
        left: 0
        right: unset

    // .content
    //   padding: 0
    //   width: 60%
    //   margin-left: 1rem

    @include desktop
</style>
