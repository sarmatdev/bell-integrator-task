<template>
  <component :is="tag">
    <fa-icon v-bind="$attrs">
      <slot />
    </fa-icon>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseIcon extends Vue {
  @Prop({ type: String, default: 'span' })
  tag?: string
}
</script>

<style></style>
