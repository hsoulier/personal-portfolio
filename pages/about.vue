<template>
  <div class="px-8 lg:container mx-auto pb-16">
    <h1 class="text-4xl font-extrabold uppercase mb-5">Qui suis-je ?</h1>
    <p class="mb-4">
      Un développeur alternant au CFA des Sciences/Sorbonne Univeristé orienté
      <b>Front-End</b> mais qui pratique également le Back-End. Ma soif
      d'apprendre et de défis me motive à apprendre toujours plus de
      technologies.<br />
    </p>
    <p class="mb-4">
      J'ai commencé le développement en Python en 2017 et je ne cesse d'en découvrir des
      nouveaux depuis. Je suis tombé sur ma perle : le <b>Javascript</b> 💛 et
      par la suite mon framework favori pour sa simplicité <b>VueJS</b> 💚.
      <br />
    </p>
    <div class="mb-8 flex flex-col md:flex-row justify-start gap-4 items-start">
      <p class="md:w-1/2 lg:w-1/3">
        Je suis capable de développer avec les outils
      <ul>
        <li>Javascript</li>
        <li>NodeJS</li>
        <li>PHP</li>
        <li>VueJS</li>
        <li>NuxtJS</li>
        <li>React (en apprentissage)</li>
        <li>Java (en apprentissage)</li>
        <li>Symphony 4 (en apprentissage)</li>
        <li>Python (Remise en jambe nécessaire)</li>
      </ul>
      </p>
      <p class="md:w-1/2 lg:w-1/3">
        Je suis également capable d'utiliser 
      <ul class="pt-2 mb-4">
        <li>MySQL</li>
        <li>Git</li>
        <li>Apache 2</li>
        <li>Nginx</li>
        <li>MongoDB (en apprentissage)</li>
      </ul>
      Enfin je possède quelques compétences pour mettre en place un serveur Web de l'initialisation à la mise en production d'applications.

      </p>
    </div>
    <a href="/cv-hippolyte-soulier.pdf" class="px-6 py-2 uppercase font-bold">Voir mon CV</a>
    <div class="mt-8">
      <h1 class="text-4xl font-extrabold uppercase mb-5">Où me contacter ?</h1>
    <div class="social inline-flex flex-wrap items-center text-center gap-4">
      <a class="" href="mailto:hi.soulier@gmail.com"
        ><mail-icon size="1.5x" class="custom-class"></mail-icon>
        hi.soulier@gmail.com
      </a>
      <a href="https://github.com/hsoulier"
        ><github-icon size="1.5x" class="custom-class"></github-icon>
        /hsoulier
      </a>
      <a href="https://www.instagram.com/hippolyte.soulier/"
        ><instagram-icon size="1.5x" class="custom-class"></instagram-icon>
        /hippolyte.soulier
      </a>
      <a href="https://www.linkedin.com/in/hippolyte-soulier/"
        ><linkedin-icon size="1.5x" class="custom-class"></linkedin-icon>
        /hippolyte-soulier
      </a>
    </div>
    </div>
  </div>
</template>

<script>
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
          content: 'Tous savoir sur mes compétences en tant que développeur Front-End javascript, VueJS et back-end avec nodeJS',
        },
      ],
    }
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
