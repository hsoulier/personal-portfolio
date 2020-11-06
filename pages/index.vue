<template>
  <div class="presentation lg:container" ref="home">
    <div class="img-container">
      <img src="/hippolyte-soulier.jpg" alt="Hippolyte Soulier" />
      <h1>
        hippolyte<br />
        <span>soulier</span>
      </h1>
    </div>
    <p class="presentation-text">
      <i class="font-light">Une petite présentation s'impose :</i><br />
      <span>
        Je suis un développeur alternant au CFA des Sciences/Sorbonne Univeristé
        orienté Front-End à Paris. Ma soif de connaissance et de défis me motive
        à apprendre toujours plus de technologies.
      </span>
    </p>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'index',
  head() {
    return {
      title: 'Portfolio | Hippolyte Soulier',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Tous savoir sur mes compétences en tant que développeur Front-End javascript, VueJS et back-end avec nodeJS',
        },
      ],
    }
  },
  mounted() {
    const { home } = this.$refs
    const tl = gsap.timeline({ repeat: false })
    tl.from(home.querySelector('.img-container img'), {
      x: -200,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    })
      .from(
        home.querySelector('.img-container h1'),
        {
          x: -200,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.48'
      )
      .from(
        home.querySelector('.presentation-text'),
        {
          x: 200,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.60'
      )
  },
}
</script>


<style scoped>
h1 {
  font-size: 18vw;
  mix-blend-mode: difference;
}

h1 span {
  -webkit-text-stroke: 2px #f7fafc;
}

img {
  filter: brightness(0.6);
}
@media (min-width: 768px) {
  h1 {
    font-size: 5rem;
  }
  .img-container {
    height: 30rem;
  }
}
</style>