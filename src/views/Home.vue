<template>
  <div class="home">
    <base-input v-model="query" placeholder="Seach by name"></base-input>
    <div class="container mt-20">
      <FiriendsList :query="query" :loading="loading" :data="filteredFriends" type="remove" @move="move" />
      <FiriendsList :query="query" :data="deletedFriends" type="restore" @move="move" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import FiriendsList from '../components/common/FriendsList.vue'
import { IFriend } from '@/models/friends'

const friendsNamespace: string = 'friends'

@Component({
  components: {
    FiriendsList
  }
})
export default class Home extends Vue {
  @Action('getFriends', { namespace: friendsNamespace })
  getFriends: any
  @Action('removeFriend', { namespace: friendsNamespace })
  removeFriend: any
  @Action('restoreFriend', { namespace: friendsNamespace })
  restoreFriend: any
  @Getter('filteredFriendsGetter', { namespace: friendsNamespace })
  filteredFriendsGetter: any
  @Getter('deletedFriendsGetter', { namespace: friendsNamespace })
  deletedFriendsGetter: any

  query = ''
  loading = true

  get deletedFriends() {
    return this.deletedFriendsGetter
  }

  get filteredFriends() {
    return this.filteredFriendsGetter(this.query)
  }

  move(item: IFriend) {
    item.type === 'remove' ? this.removeFriend(item) : this.restoreFriend(item)
  }

  created() {
    this.getFriends().then(() => {
      this.loading = false
    })
  }
}
</script>
