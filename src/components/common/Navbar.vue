<template>
  <nav class="nav">
    <base-button
      v-for="(link, i) in links"
      :key="i"
      class="nav__item"
      :color="link.color"
      text
      :to="linkUrl(link)"
      >{{ link.name }}</base-button
    >
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface INavLinks {
  name: string
  to: string
  color: string
  action: string
}

@Component
export default class Navbar extends Vue {
  links = [
    {
      name: 'Home',
      to: '/',
      color: 'black'
    },
    {
      name: 'History',
      to: '/history',
      color: '#1151B2'
    },
    {
      name: 'Removing history',
      to: '/history',
      action: 'remove',
      color: '#B21B11'
    },
    {
      name: 'Restore history',
      to: '/history',
      action: 'restore',
      color: '#48B190'
    }
  ]

  linkUrl(link: INavLinks) {
    return `${link.to}${link.action ? `?action=${link.action}` : ''}`
  }
}
</script>

<style lang="scss">
.nav {
  margin: 20px;

  &__item {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
