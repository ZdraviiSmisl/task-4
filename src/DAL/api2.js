import axios from 'axios';

const instance = axios.create({
  baseURL: `https://neko-cafe-back.herokuapp.com/auth/test`
})

export const api = {
  requestToServer(status) {
    return instance.post(``, {success: status})
  }
}


