import request from '@/utils/request'

export function sendCaptcha(email) {
  return request.get('/login/email', {
    params: { email }
  })
}

export function getUserByUserName(userName) {
  return request.get('/login/getUser', {
    params: { userName }
  })
}

export function registerUser(payload) {
  return request.post('/login/addUser', payload, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function login(userName, password) {
  return request.post('/login/userLogin', null, {
    params: { userName, password }
  })
}
