<h1>Le coaching</h1>

<section class="types">
  <div class="content">
    <p>Je vous propose 3 types d'accompagnements.</p>
    <ul>
      <a href="/le-coaching/bien-etre">
        <li>Coaching Bien-être</li>
      </a>
      <a href="/le-coaching/sexualite-positive">
        <li>Coaching Sexualité positive</li>
      </a>
      <a href="/le-coaching/sexualite-positive">
        <li>Coaching Éco-responsabilité</li>
      </a>
    </ul>
  </div>
</section>

<section>
  <h2>Pour qui ? pour quoi ?</h2>

  <div class="img-container">
    <img
      src="/images/shaking-hands-2499629_640.jpg"
      alt="Books and a cup of tea on a table"
    />
  </div>
  <div class="content">
    <p>
      Le coaching s'adresse à toute personne qui, à un moment précis de sa vie,
      ressent le besoin de débloquer les rouages qui l'empêchent d'avancer et
      d'atteindre son objectif (manque de confiance, manque de repère, perte de
      motivation, peurs et angoisses).
    </p>
    <p>
      Il s'agit d'une pratique centrée sur l'Humain, qui part du présent pour se
      tourner vers l'avenir. Elle vise à faire émerger en vous
      <strong>vos propres solutions</strong> : nombre d'entre nous nous mettons des
      barrières nous-mêmes, qui nous empêchent de voir clairement nos capacités et
      nos ressources. Le coaching agit comme révélateur de vos forces.
    </p>
    <p>
      Le coach ne vous donne pas de solution clé en main : c'est par votre
      implication, votre envie de changer, et votre capacité à vous remettre en
      question que vous pourrez progresser. Le coaching est un accompagnement
      pas à pas dans votre voyage.
    </p>
  </div>
</section>

<blockquote>
  <p>
    Accompagner quelqu’un, c’est se placer ni devant, ni derrière, ni à la
    place.
  </p>
  <p>C’est être à côté.</p>
</blockquote>

<section class="deontology">
  <h2>Code de Déontologie</h2>
  <div class="content">
    <p>Je m'engage à:</p>
    <ul>
      <li>un strict respect de la <b>confidentialité</b> de nos entretiens</li>
      <li>me former et m'informer continuellement</li>
      <li>faire état de ma pratique auprès d'un superviseur</li>
      <li>veiller en priorité à vos intérêts</li>
      <li>maintenir une relation strictement <b>professionnelle</b></li>
    </ul>
    <p>
      Je vous invite à consulter <a href="/Code de déontologie.pdf"
        >l'intégralité de mon code de déontologie</a
      >.
    </p>
  </div>
</section>

<section>
  <a class="button" href="/contact">Contactez-moi !</a>
</section>

<style lang="sass">
  blockquote
    position: relative
    color: black
    font-size: 1.1em
    font-style: italic
    margin: 2em 0
    padding: 0 1.5em
    quotes: initial

    &::after
      position: absolute
      color: var(--pink)
      opacity: 0.2
      font-size: 12em
      z-index: -1
      top: -0.5em
      left: 0
      content: open-quote

    p
      margin: auto
      text-align: center

  ul
    padding-left: 1.5em
    list-style: disc

  .types
    margin: 4em 0

    .content
      width: 100%

    p
      margin: 2em auto
      text-align: center

    ul
      display: flex
      justify-content: center
      flex-flow: column
      list-style: none
      padding: 0

      a
        color: white

        li
          padding: 1rem
          margin: 0.5rem
          background: var(--pink)
          border-radius: 0.5rem
          text-align: center

        &:hover, &:focus
          text-decoration: none
          li
            box-shadow: 0px 0px 5px 0px rgba(black, 0.5)


  li
    margin: 0.5em 0

  section.deontology
    align-items: center

  @include tablet
    .types
      ul
        flex-flow: row

    blockquote
      font-size: 1em
      margin-bottom: 5rem

      &::after
        font-size: 9em
        left: 0.5em

  @include desktop
    blockquote
      &::after

      p
        font-size: 1.2em
</style>
