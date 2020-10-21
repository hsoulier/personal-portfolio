<template>
  <nav class="flex items-center justify-end flex- flex-wrap p-6 relative">
    <div class="block relative z-50">
      <button
        class="flex items-center px-2 py-2 text-current uppercase"
        @click="isCollapse = !isCollapse"
      >
        Menu
      </button>
    </div>
    <div
      :class="[
        isCollapse
          ? ['opacity-0', 'pointer-events-none']
          : ['opacity-100', 'pointer-events-auto'],
      ]"
      class="transition duration-500 ease-out absolute z-30 w-full h-screen top-0 left-0 bg-black bg-opacity-85"
    >
      <div
        @click="isCollapse = !isCollapse"
        class="flex items-center justify-center flex-col md:w-full h-full"
      >
        <nuxt-link
          to="/"
          class="text-center transform md:absolute md:-rotate-90 md:left-1/3 md:bottom-1/2 block mt-4 md:inline-block md:mt-0 mr-4 text-white text-6xl md:-translate-x-1/2 uppercase font-black text-stroke"
        >
          Accueil
        </nuxt-link>
        <nuxt-link
          to="/projects"
          class="text-center transform md:absolute md:-rotate-90 md:left-1/2 md:bottom-1/2 block mt-4 md:inline-block md:mt-0 mr-4 text-white text-6xl md:-translate-x-1/2 uppercase font-black text-stroke"
        >
          Projets
        </nuxt-link>
        <nuxt-link
          to="/about"
          class="text-center transform md:absolute md:-rotate-90 md:left-2/3 md:bottom-1/2 block mt-4 md:inline-block md:mt-0 mr-4 text-white text-6xl md:-translate-x-1/2 uppercase font-black text-stroke"
        >
          A propos
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => {
    return {
      isCollapse: true,
    }
  },
}
</script>

 