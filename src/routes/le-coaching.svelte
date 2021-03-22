<h1>Le coaching</h1>

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
      tourner vers l'avenir. Elle vise à faire émerger en vous vos propres
      solutions : nombre d'entre nous nous mettons des barrières nous-mêmes, qui
      nous empêchent de voir clairement nos capacités et nos ressources : le
      coaching agit comme révélateur de vos forces.
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

<section>
  <h2>Déontologie</h2>
  <div class="content">
    <p>Selon le code de déontologie de la profession :</p>
    <ul>
      <li>Nos conversations sont <b>confidentielles</b></li>
      <li>Notre relation est strictement <b>professionnelle</b></li>
      <li>Je continue à me former et à m'informer</li>
      <li>Je fais état de ma pratique auprès de profession</li>
    </ul>
  </div>
</section>

<style lang="sass">
  blockquote
    position: relative
    color: black
    font-size: 1.2em
    font-style: italic
    margin: 2em 0
    padding-left: 0.5em
    quotes: initial

    &::after
      position: absolute
      color: var(--pink)
      opacity: 0.2
      font-size: 12em
      z-index: -1
      top: 0
      left: -0.1em
      content: open-quote

    p
      text-align: center

  ul
    padding-left: 1.5em
    list-style: disc

  li
    margin: 0.5em 0

  section:last-of-type
    align-items: center

  @include tablet
    blockquote
      &::after
        top: -0.25em
        left: -0.1em

  @include desktop
    blockquote
      p
        font-size: 1.2em
</style>
