<h1>
  Océane
  <div>coach bien-être et sexualité</div>
</h1>

<section>
  <div class="portrait img-container">
    <img src="/images/portrait_oceane.png" alt="Portrait Océane" />
  </div>
  <div class="content">
    <p>
      Forte d'une expérience professionnelle diversifiée et atypique, le lien
      entre mes différentes activités a toujours été l'Humain et les relations
      interpersonnelles. Être à l'écoute, recevoir sans jugement, m'intéresser à
      l'autre, est comme une seconde nature chez moi, que je souhaite mettre à
      votre service dans le cadre de la relation d'aide.
    </p>
    <p>
      Curieuse du rapport au corps et de la recherche de sensualité, c'est par
      un travail sur moi-même et par les discussions passionnées et
      passionnantes que j'entretien ici et là, que j'identifie cette
      problématique, ce besoin de se reconnecter à soi, à son corps et à ses
      émotions.
    </p>
    <p>
      Parce que le bien-être passe aussi par la connaissance de son Moi le plus
      intime, une sexualité consciente et épanouie me semble être une des clés
      du bonheur.
    </p>
    <p>
      Fonceuse, femme active avant tout, je décide en 2020, plutôt que de subir
      la paralysie mondiale imposée par la crise sanitaire, de me réinventer et
      de me former au coaching en développement personnel afin de compléter mes
      aptitudes naturelles par des compétences concrêtes, pour mieux vous
      accompagner dans la poursuite de vos objectifs.
    </p>
  </div>
</section>

<style lang="sass">
  h1
    div
      margin: auto
      text-align: center
      font-size: 0.8em
      color: var(--blue)

  .content p:first-child
    margin-top: 0

  .portrait
    width: 13rem
    height: 13rem
    margin: 2rem auto
    border-radius: 50%
    box-shadow: 0px 0px 10px 0px rgba(black, 0.5)

    img
      filter: opacity(80%)
      object-position: 10px -20px

  @include tablet
    h1
      margin-bottom: 1em

    .content
      padding-top: 0em

    .portrait
      width: 14rem
      height: 18rem
      max-height: 18rem
      border-radius: 2rem
      margin: 0

      img
        object-position: 0px -10px

  @include desktop
    h1
      div
        font-size: 0.7em

    .content
      padding-top: 9em

    .portrait
      width: 17rem
      height: 21rem
      max-height: 21rem

    img

</style>
