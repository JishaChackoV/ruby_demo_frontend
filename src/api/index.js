import axios from 'axios'

const API_URL = 'https://questions-assignment.herokuapp.com/api';
export const performRequest = (method, url, params, auth,data) => {
 const body = method === 'get' ? 'params' : 'data'
 
 const config = {
   method,
   url,
   baseURL: API_URL,
   headers: {
    accept: 'application/json',
  },
   [body]: params || {}
 }

 
 if (auth) {
   config.headers = {
     Authorization: `Bearer ${localStorage.token}`
   }
 }
 
 
 return axios.request(config)
}