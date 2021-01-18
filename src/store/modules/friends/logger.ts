import { IFriend, EType } from '@/models/friends'

interface IHistoryLog extends IFriend {
  action?: EType
}

interface IState {
  historyLog: Array<IHistoryLog>
}

export default {
  state: {
    historyLog: []
  },
  mutations: {
    addHistoryRecord(state: IState, payload: IFriend) {
      state.historyLog.push(payload)
    }
  },
  getters: {
    historyLog: (s: IState) => (action: EType) => {
      if (!action) {
        return s.historyLog
      }
      return s.historyLog.filter(item => {
        if (item.action === action) {
          return item
        }
      })
    }
  }
}
