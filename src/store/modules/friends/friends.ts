import { getFriends } from '@/api/friends.api'
import { IFriend } from '@/models/friends'

interface IState extends IFriend {
  friends: TFriends
  deletedFriends: TFriends
}

interface IGetter extends IState {
  deletedFriendsGetter: TFriends
  filteredFriendsGetter: TFriends
}

type TFriends = [IFriend]

export default {
  state: {
    friends: [],
    deletedFriends: []
  },
  mutations: {
    setFriends(state: IState, payload: TFriends) {
      state.friends = payload
    },
    setDeletedFriends(state: IState, payload: IFriend) {
      state.deletedFriends.push(payload)
    },
    restoreFriend(state: IState, payload: IFriend) {
      const deltedID = state.deletedFriends.indexOf(payload)
      state.deletedFriends.splice(deltedID, 1)
    }
  },
  actions: {
    getFriends({ commit }: { commit: Function }): Promise<void> {
      return getFriends().then(res => {
        commit('setFriends', res.data.data)
      })
    },
    removeFriend({ commit }: { commit: Function }, item: IFriend): void {
      commit('setDeletedFriends', item.id)
      commit('logger/addHistoryRecord', { item, action: 'remove', date: new Date() }, { root: true })
    },
    restoreFriend({ commit }: { commit: Function }, item: IFriend): void {
      commit('restoreFriend', item.id)
      commit('logger/addHistoryRecord', { item, action: 'restore', date: new Date() }, { root: true })
    }
  },
  getters: {
    // All friends
    friends: (s: IState) => s.friends.filter((item: IFriend) => !s.deletedFriends.includes(item.id)),
    // Deleted friends
    deletedFriendsGetter: (s: IState) => s.friends.filter(item => s.deletedFriends.includes(item.id)),
    // Filtered friends | by query
    filteredFriendsGetter: (_: any, getters: IGetter) => (query: string) => {
      const friends = getters.friends
      if (!query.length) {
        return friends
      }

      const matcher = new RegExp(query, 'ig')

      const sortedFriends = []
      for (let index = 0; index < friends.length; index++) {
        const itemAllNames = friends[index].items.map((item: IFriend) => item.name).join()

        const namesStr = friends[index].name + itemAllNames
        let matches = namesStr.match(matcher)

        if (matches) {
          sortedFriends.push({ ...friends[index], countOfMatches: matches.length })
        }
      }

      return sortedFriends.sort((a, b) => b.countOfMatches - a.countOfMatches)
    }
  }
}
