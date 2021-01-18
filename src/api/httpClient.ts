import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://thingproxy.freeboard.io/fetch/http://188.166.35.35:5000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient
