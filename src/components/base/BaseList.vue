<template>
  <transition-group class="base-list" name="list" tag="ul">
    <li v-for="item in data" :key="item.id" class="base-list__item">
      <div class="base-list__box">
        <slot :item="item"></slot>
        <slot name="append" />
      </div>
    </li>
  </transition-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFriend } from '@/models/friends'
@Component
export default class BaseList extends Vue {
  @Prop(Array) data!: IFriend
}
</script>

<style lang="scss">
.base-list {
  color: white;
  background-color: #fff;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  width: 350px;
  font-weight: 600;
  list-style: none;
  position: relative;
  max-height: 500px;
  overflow: scroll;

  &__item {
    color: #2c3e50;
    padding: 10px;
    border-top: 1px solid #2c3e50;
    border-bottom: 1px solid #2c3e50;
  }

  &__box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
