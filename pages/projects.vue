<template>
  <div class="px-8 lg:container mx-auto">
    <h1 class="text-4xl font-extrabold uppercase">quelques projets</h1>
    <ul class="flex flex-wrap py-8">
      <li
        class="w-full md:w-1/2 lg:w-1/3 md:px-4 py-3 mt-6 relative"
        v-for="project in projects"
        :key="project.id"
      >
        <span
          class="text-6xl opacity-10 font-light number absolute left-0 top-0 transform -translate-y-1/5 -translate-x-3"
          >{{ project.id }}</span
        >
        <a :href="project.link">
          <h2 class="text-3xl mb-3">{{ project.title }}</h2>
          <p class="mb-2">{{ project.text }}</p>
          <p class="font-light italic">{{ project.stack }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  head() {
    return {
      title: 'Projets | Hippolyte Soulier',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tous savoir sur mes compétences en tant que développeur Front-End javascript, VueJS et back-end avec nodeJS et voir mes projets',
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
            "Pendant mon cursus de DUT à Toulon, j'ai développé un site d'une agence fictive. J'ai pu apprendre pu apprendre la sécurité SQL et le développement d'un espace personnalisé.",
          stack: 'PHP7, JS, HTML, SASS',
          link: 'http://untitled.mmitoulon.com',
        },
        {
          id: '02',
          title: 'Portfolio',
          text:
            "Ayant découvert récemment VueJS, j'ai voulu essayé le framework pour développer un site statique facilement et rapidement.",
          stack: 'NextJS, TailwindCSS, NodeJS',
          link: '/',
        },
        {
          id: '03',
          title: 'Rework Agence Untitled',
          text:
            "Je n'étais pas satisfait du rendu du site que j'ai pu développer. J'ai donc recommencé de zéro avec les compétences acquises entre temps",
          stack: 'ThreeJS, TailwindCSS, Webpack, GSAP',
          link: 'https://hsoulier.dev/untitled-agency',
        },
      ],
    }
  },
}
</script>