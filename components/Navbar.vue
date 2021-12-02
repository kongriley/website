<template>
  <div>
    <div class="fixed top-0 right-0 mt-8 mr-20">
      <div class="absolute topline right-0 w-32 bg-blue-600"/>
      <div class="flex flex-col align-center text-right mt-4 text-2xl text-gray-500">
        <NuxtLink to="/" class="pr-2 pr-0 pt-8 hover:text-black">home</NuxtLink>
        <a href="https://github.com/kongriley" class="px-2 px-0 hover:text-black">coding</a>
        <a href="https://lingintensive.com" class="px-2 px-0 hover:text-black">linguistics</a>
        <a href="https://www.youtube.com/channel/UC3jYTktwIe_NmS9N2Fb-kMg" class="pl-0 hover:text-black">music</a>
      </div>
      
    </div>
    <NuxtLink to="/">
      <svg class="absolute bottom-0 right-0 mb-8 mr-20" width="60px" height="60px" viewBox="0 0 200 200" preserveAspectRatio="none" >
          <!-- <ellipse cx="0" cy="50" rx="100" ry="50"/> -->
          <polygon points="0,0 100,0 100,100 0,100" fill="#93C5FD" />
          <polygon points="0,100 100,200 0,200" fill="#93C5FD" />
          <polygon points="100,0 200,0 100,100" fill="#3B82F6" />
          <polygon points="100,100 200,200 100,200" fill="#3B82F6" />
      </svg>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      tabs: [
        {
          name: 'home',
          path: '/'
        },
        {
          name: 'projects',
          path: '/projects'
        },
        {
          name: 'language',
          path: '/language'
        },
        {
          name: 'music',
          path: '/music'
        }
      ]
    }
  },
  props: {
    currTab: 0,
  }
}
</script>

<style scoped>
  .topline {
    height: 3px;
  }
</style>