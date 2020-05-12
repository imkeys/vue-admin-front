import { login, logout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  user: JSON.parse(window.localStorage.getItem('user'))
  // user: {
  //   name: window.localStorage.getItem('user.name'),
  //   nickName: window.localStorage.getItem('user.nickName'),
  //   avatar: window.localStorage.getItem('user.avatar')
  // }
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.user = user
    window.localStorage.setItem('user', JSON.stringify(user))
  }
  // SET_NAME: (state, username) => {
  //   state.user.name = username
  //   window.localStorage.setItem('user.name', username)
  //   window.localStorage.setItem('user.nickName', username)
  // },
  // SET_AVATAR: (state, avatar) => {
  //   state.user.avatar = avatar
  //   window.localStorage.setItem('user.avatar', avatar)
  // }
}

const actions = {
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password
      })
        .then(res => {
          const { data } = res
          commit('SET_TOKEN', data.token)
          commit('SET_USER', data)
          // commit('SET_NAME', data.username)
          // commit('SET_AVATAR', data.avatar)
          setToken(data.token)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  logout ({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
