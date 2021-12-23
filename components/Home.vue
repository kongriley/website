<template>
  <div class="relative h-screen bg-gray-100">

    

    <div class="h-screen text-xl">
     <div class="relative h-full">
      <img src="/ballade.jpg" class="section absolute top-0 left-0" />
     </div>
      <!-- <div class="relative h-1/3">
        <img src="/coding.jpg" class="section absolute top-0 left-0" />
        <div class="label absolute top-0 right-0 text-center">projects</div>
      </div>
      <div class="relative h-1/3">
        <img src="/ballade.jpg" class="section absolute top-0 left-0" />
        <div class="label absolute top-0 right-0 text-center">music</div>
      </div>
      <div class="relative h-1/3">
        <img src="/walloflove.jpg" class="section absolute top-0 left-0" />
        <div class="label absolute top-0 right-0 text-center">linguistics</div>
      </div> -->
    </div>

    <div class="invisible lg:visible">
      <!-- <div class="midbar bg-gradient-to-r from-white to-gray-400"></div> -->
        <div class="absolute top-0 left-0 midbar-white" />
        <img class="absolute top-0 left-0 midbar" src="/coding.jpg" />
    </div>

    <div class="absolute name lg:pl-24 z-10">
      <div class="font-serif leading-snug text-center w-screen lg:w-auto text-5xl lg:text-6xl">Riley Kong</div>
      <div class="flex text-4xl pt-5 justify-center lg:justify-start space-x-4">
        <a href="mailto:kongriley@gmail.com">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
        <a href="https://github.com/kongriley/">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://www.linkedin.com/in/riley-kong/">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </div>
    </div>

    
    <Navbar />
    
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
  .fancy-chinese {
    font-family: "Liu Jian Mao Cao", "Noto Sans CJK SC", sans-serif;
  }
  .name {
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .midbar-white {
    width: 100vw;
    height: 100vh;
    clip-path: polygon(0 0, 40% 0, 50% 100%, 0 100%);
    opacity: 1;
    background-color: #FFFFFF;
  }
  .midbar {
    width: 100vw;
    height: 100vh;
    clip-path: polygon(0 0, 40% 0, 50% 100%, 0 100%);
    opacity: 0.1;
  }
  .section {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
  }
  .label {
    width: 50%;
    margin-top: calc(100vh / 6 - 1em);
  }
  font-awesome-icon {
    height: 100%;
  }
</style>