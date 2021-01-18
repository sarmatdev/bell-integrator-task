<template>
  <input
    class="base-input"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseInput extends Vue {
  @Prop({}) value!: string | number
  @Prop({ default: 'text' }) type?: string
  @Prop({ default: 'Placeholder' }) placeholder?: string
}
</script>

<style lang="scss">
.base-input {
  background-color: #f6f6f6;
  border: 2px solid transparent;
  outline: none;
  border-radius: 6px;
  font-size: 1.6rem;
  padding: 18px 20px;
  caret-color: #ED9F43;

  &:focus {
    border: 2px solid #c8c8c8;
    box-shadow: 0px 8px 9px rgba(67, 78, 74, 0.07),
      0px 16px 23px rgba(67, 78, 74, 0.09);
  }
}
</style>
