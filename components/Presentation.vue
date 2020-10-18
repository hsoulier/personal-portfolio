<template>
  <div class="presentation">
    <div class="relative mx-auto w-3/4 h-3/4 md:h-1/2 md:w-1/2">
      <img
        src="/hippolyte-soulier.jpg"
        alt="Hippolyte Soulier"
        class="h-full w-full object-contain"
      />
      <p class="w-10/12 md:w-8/12 leading-6 absolute left-1/3 bottom-0 transform translate-y-1/2 -translate-x-1/3 md:-translate-x-2/5 px-4 py-3 bg-yellow-500 text-gray-800">
      <i class="font-light">Une petite présentation s'impose :</i><br />
      <span>
        Je suis un développeur alternant au CFA des Sciences/Sorbonne Univeristé orienté Front-End à Paris. Ma soif
        d'apprendre et de défis me motive à apprendre toujours plus de technologies.
      </span>
    </p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Presentation',
}
</script>