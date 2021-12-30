<template>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
  },
  methods: {
    name() {
      
    }
  },
  setup() {
    const active = ref(0)
    return { active }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
