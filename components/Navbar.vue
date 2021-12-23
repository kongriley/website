<template>
  <div>
    <div class="fixed top-0 right-0 mt-8 mr-10 lg:mr-20">
      <div class="absolute topline right-0 w-32 bg-blue-600"/>
      <div class="flex flex-col align-center text-right mt-6 text-xl text-gray-500">
        <NuxtLink :to="tab.path" class="lg:mt-1 hover:text-black" v-for="tab in tabs" :key="tab.index">{{tab.name}}</NuxtLink>
      </div>
      
    </div>
    <NuxtLink to="/">
      <svg class="fixed bottom-0 right-0 logo mb-8 mr-10 lg:mr-20" width="60px" height="60px" viewBox="0 0 200 200" preserveAspectRatio="none" >
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
          path: '/',
          index: 0,
        },
        {
          name: 'coding',
          path: '/coding',
          index: 1,
        },
        {
          name: 'linguistics',
          path: '/linguistics',
          index: 2,
        },
        {
          name: 'music',
          path: '/music',
          index: 3,
        }
      ]
    }
  },
  props: {
    currTab: 0,
  }
}
</script>

<style>
  .topline {
    height: 3px;
  }
  body {
    overflow-y: overlay;

  } 
</style>