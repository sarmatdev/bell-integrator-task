export enum EType {
  REMOVE = 'remove',
  RESTORE = 'restore'
}

export interface IFriend {
  id: number | any
  name: string
  items: []
  type?: EType
}

export interface IFriendsLog extends IFriend {
  action?: string
}
