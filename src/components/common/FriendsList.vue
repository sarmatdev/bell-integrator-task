<template>
  <div class="friends-list">
    <p>{{ listHeader }}</p>
    <div class="friends-list__container">
      <base-loader v-if="loading && type === 'remove'" />
      <base-list v-slot="{ item }" :data="data" v-bind="$attrs">
        <text-highlight :queries="query">{{ item.name }}</text-highlight>
        <base-button slot="append" small @click="move(item)">
          <base-icon
            size="sm"
            style="color: white;"
            :icon="btnIcon"
          ></base-icon>
        </base-button>
        <base-list v-slot="{ item }" :data="item.items">
          <text-highlight :queries="query">{{ item.name }}</text-highlight>
        </base-list>
      </base-list>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFriend, EType } from '@/models/friends'
@Component
export default class FriendsList extends Vue {
  @Prop({ type: Array })
  data!: IFriend
  @Prop({ type: Boolean })
  loading?: boolean
  @Prop({ type: String })
  type!: EType
  @Prop({ type: String })
  query!: string

  get listHeader() {
    return this.type === 'restore' ? 'Deleted friends list' : 'Friends list'
  }

  get btnIcon() {
    return this.type === 'restore' ? 'minus' : 'plus'
  }

  move(item: IFriend) {
    this.$emit('move', { ...item, type: this.type })
  }
}
</script>

<style lang="scss">
.friends-list {
  &__container {
    min-height: 500px;
    position: relative;
  }
}
</style>
