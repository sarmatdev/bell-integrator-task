import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://157.245.12.176:5000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient
