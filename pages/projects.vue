<template>
  <div class="project-page lg:container">
    <h1>quelques projets</h1>
    <ul ref="projects" class="projects">
      <li
        v-for="project in projects"
        :key="project.id"
      >
        <span
          class="number"
          >{{ project.id }}</span
        >
        <a :href="project.link">
          <h2>{{ project.title }}</h2>
          <p class="mb-2">{{ project.text }}</p>
          <p class="font-light italic">{{ project.stack }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'Projects',
  head() {
    return {
      title: 'Projets | Hippolyte Soulier',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Tous savoir sur mes compétences en tant que développeur Front-End javascript, VueJS et back-end avec nodeJS et voir mes projets',
        },
      ],
    }
  },
  asyncData() {
    return {
      projects: [
        {
          id: '01',
          title: 'Agence Untitled',
          text:
            "Pendant mon cursus de DUT à Toulon, j'ai développé un site d'une agence fictive. J'ai pu apprendre la sécurité SQL et le développement d'un espace personnalisé.",
          stack: 'PHP7, JS, HTML, SASS, MySQL',
          link: 'http://untitled.mmitoulon.com',
        },
        {
          id: '02',
          title: 'Portfolio',
          text:
            "Ayant découvert récemment VueJS, j'ai essayé le framework NuxtJS pour développer un site statique facilement et rapidement.",
          stack: 'NuxtJS, TailwindCSS, Webpack, NodeJS, GSAP',
          link: '/',
        },
        {
          id: '03',
          title: 'Rework Agence Untitled',
          text:
            "Je n'étais pas satisfait du site que j'ai pu développer. J'ai donc recommencé le projet avec une base neuve pour tester mes compétences acquises entre temps.",
          stack: 'ThreeJS, TailwindCSS, Webpack, GSAP',
          link: 'https://project.hsoulier.dev/project/untitled-agency/',
        },
        {
          id: '04',
          title: 'NO/ID* lab',
          text:
            "Site vitrine que j'ai développé pendant mon stage de fin d'étude pour l'agence d'évenemenetielle NO/ID* lab à Toulon",
          stack: 'Wordpress, YoastSEO',
          link: 'https://www.noidlab.com/',
        },
      ],
    }
  },
  mounted() {
    const { projects } = this.$refs
    const tl = gsap.timeline()
    tl.from(projects.querySelectorAll('li'), {
      x: -80,
      opacity: 0,
      duration: .5,
      stagger: 0.18,
    })
  },
}
</script>