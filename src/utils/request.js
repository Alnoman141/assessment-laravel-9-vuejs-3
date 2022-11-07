import axios from 'axios'
import store from '@/store'
// create an axios instance
const service = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

export default service