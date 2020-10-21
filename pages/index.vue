<template>
  <div
    class="presentation flex flex-col md:flex-row gap-4 px-8 lg:container mx-auto justify-between md:items-start"
  >
    <div class="img-container w-full relative md:w-2/3">
      <img
        src="/hippolyte-soulier.jpg"
        alt="Hippolyte Soulier"
        class="h-full w-full object-contain md:object-cover md:bg-center"
      />
      <h1
        class="leading-none md:leading-none absolute left-1/2 top-3/5 transform -translate-x-1/2 -translate-y-1/5 font-black"
      >
        hippolyte<br />
        <span class="block text-transparent font-black uppercase tracking-wider"
          >soulier</span
        >
      </h1>
    </div>
    <p class="py-1 px-3 w-full md:w-1/3 bg-yellow-500 text-gray-800">
      <i class="font-light">Une petite présentation s'impose :</i><br />
      <span>
        Je suis un développeur alternant au CFA des Sciences/Sorbonne Univeristé
        orienté Front-End à Paris. Ma soif d'apprendre et de défis me motive à
        apprendre toujours plus de technologies.
      </span>
    </p>
  </div>
</template>

<script>
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