<template>
  <component
    :is="whichTag"
    :to="to"
    class="base-button"
    :class="{
      'base-button--circle': circle,
      'base-button--outlined': outlined,
      'base-button--small': small,
      'base-button--text': text,
      'base-button--active': active
    }"
    :style="`color: ${color}`"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseButton extends Vue {
  @Prop({
    type: String,
    default: 'button',
    validator: v => ['button', 'a'].includes(v)
  })
  tag?: string
  @Prop(String)
  to?: string
  @Prop(Boolean)
  circle?: boolean
  @Prop(Boolean)
  small?: boolean
  @Prop(Boolean)
  text?: boolean
  @Prop({
    type: String,
    default: '#48B190'
  })
  color?: string
  @Prop(Boolean)
  outlined?: boolean
  @Prop(Boolean)
  active?: boolean

  get whichTag() {
    if (this.to) {
      return 'router-link'
    }

    return this.tag
  }
}
</script>

<style lang="scss">
.base-button {
  border: none;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.5rem 2rem;
  background-color: #48b190;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.1s ease;
  text-decoration: none;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;

  &.router-link-exact-active {
    text-decoration: underline;
  }

  &:not(.base-button--text):hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0px);
  }

  &--outlined {
    background-color: #ffffff;
    border: 2px solid #48b190;

    &:hover {
      color: white !important;
      background-color: #48b190;
    }
  }

  &--active {
    color: white !important;
      background-color: #48b190;
  }

  &--small {
    padding: 0.5rem 1rem;
  }

  &--text {
    padding: 0;
    background-color: transparent;
    color: #48b190;
  }

  &--circle {
    border-radius: 100px;
  }
  &--red {
    background-color: tomato;
  }
  &--blue {
    background-color: blue;
  }
}
</style>
