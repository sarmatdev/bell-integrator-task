import httpClient from './httpClient'
const END_POINT = '/friends'

const getFriends = () => {
  return httpClient.get(`${END_POINT}`)
}

export { getFriends }