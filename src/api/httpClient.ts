import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://hohagtrip.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient
