<template>
  <div ref="about" class="about-page lg:container">
    <h1 class="about-title">Qui suis-je ?</h1>
    <p class="mb-4">
      Un développeur alternant au CFA des Sciences/Sorbonne Univeristé orienté
      <b>Front-End</b> mais qui pratique également le Back-End. Ma soif
      de connaissance et de défis me motive à apprendre toujours plus de
      technologies.<br />
    </p>
    <p class="mb-4">
      J'ai commencé le développement en Python en 2017 et je ne cesse d'en découvrir des
      nouveaux depuis. Je suis tombé sur ma perle : le <b>Javascript</b> 💛 et
      par la suite mon framework favori pour sa simplicité <b>VueJS</b> 💚.
      <br />
    </p>
    <div class="skills">
      <p class="md:w-1/2 lg:w-1/3">
        <b>Je suis capable de développer avec les outils</b>
      <ul>
        <li>Javascript</li>
        <li>NodeJS</li>
        <li>PHP</li>
        <li>VueJS</li>
        <li>NuxtJS</li>
        <li>React (en apprentissage)</li>
        <li>Java (en apprentissage)</li>
        <li>Symphony 4 (en apprentissage)</li>
        <li>Python 3 (Un peu rouillé)</li>
      </ul>
      </p>
      <p class="md:w-1/2 lg:w-1/3">
        <b>Je suis également capable d'utiliser</b> 
      <ul class="pt-2 mb-4">
        <li>Git</li>
        <li>Apache 2</li>
        <li>Nginx</li>
        <li>Bash/Shell</li>
        <li>MySQL</li>
        <li>MongoDB (en apprentissage)</li>
      </ul>
      Enfin je possède les compétences nécessaires pour mettre en place entièrement un serveur Web sur un serveur dédié.

      </p>
    </div>
    <a href="/cv-hippolyte-soulier.pdf" class="link-cv">Voir mon CV</a>
    <div class="mt-8">
      <h2 class="mb-5">Où me contacter ?</h2>
      <div class="social">
        <a href="mailto:hi.soulier@gmail.com">
          <mail-icon size="1.5x"></mail-icon>
          hi.soulier@gmail.com
        </a>
        <a href="https://github.com/hsoulier">
          <github-icon size="1.5x"></github-icon>
          /hsoulier
        </a>
        <a href="https://www.instagram.com/hippolyte.soulier/">
          <instagram-icon size="1.5x"></instagram-icon>
          /hippolyte.soulier
        </a>
        <a href="https://www.linkedin.com/in/hippolyte-soulier/">
          <linkedin-icon size="1.5x"></linkedin-icon>
          /hippolyte-soulier
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  InstagramIcon,
} from 'vue-feather-icons'
export default {
  name: 'About',
  components: {
    GithubIcon,
    LinkedinIcon,
    InstagramIcon,
    MailIcon,
  },
  head() {
    return {
      title: 'A propos | Hippolyte Soulier',
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
    const { about } = this.$refs
    const tl = gsap.timeline()
    tl.from(about.querySelector('.about-title'), {
      x: -100,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        about.querySelectorAll('p'),
        {
          x: -100,
          opacity: 0,
          stagger: 0.2,
        },
        '-=0.5'
      )
      .from(
        about.querySelector('.link-cv'),
        {
          opacity: 0,
          duration: 0.4,
        },
        '-=.5'
      )
      .from(
        about.querySelectorAll('.social a'),
        {
          y: 50,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
        },
        '-=0.8'
      )
  },
}
</script>


<style scoped>
a {
  @apply transition duration-300 ease-in bg-yellow-500 text-gray-800;
}
.social a {
  @apply block p-4 text-center;
}
a:hover {
  @apply bg-gray-700 text-yellow-500;
}
a svg {
  margin-bottom: 0.5rem;
}
</style>
