<template>
  <div id="app">
    <Navbar />
    <transition name="fade-in-right">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from './components/common/Navbar.vue'

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
