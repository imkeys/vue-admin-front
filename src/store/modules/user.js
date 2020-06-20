import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, toggleLoginStatus } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  user: JSON.parse(window.localStorage.getItem('user')),
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.user = user
    window.localStorage.setItem('user', JSON.stringify(user))
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login ({ commit }, data) {
    const { userName, password } = data
    return new Promise((resolve, reject) => {
      login({
        userName: userName.trim(),
        password: password
      })
        .then(result => {
          const { authorization } = result
          commit('SET_TOKEN', authorization)
          setToken(authorization)
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
        commit('SET_ROLES', '')
        removeToken()
        resetRouter()
        toggleLoginStatus()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const { data } = response

        if (!data) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('验证失败，请重新尝试')
        }

        const { roles = ['admin'] } = data

        commit('SET_USER', data)
        commit('SET_ROLES', roles)
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
