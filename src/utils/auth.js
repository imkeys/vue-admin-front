import Cookies from 'js-cookie'
const TokenKey = 'access-token'
const ADMIN_KEY = 'admin'

export let hasToken = false

export function toggleLoginStatus (status = false) {
  hasToken = status
}

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

function isMatchedRole (route, allowedRoles) {
  if (route.noAuth) return true
  if (!route.meta || !route.meta.roles) return false
  return route.meta.roles.some(role => allowedRoles.includes(role))
}

export function getFilteredRoutes (routes = [], roles = ['admin']) {
  if (roles.includes(ADMIN_KEY)) return routes
  const matchedRoute = []
  routes = routes.forEach(route => {
    const tmp = { ...route }
    if (isMatchedRole(tmp, roles)) {
      if (tmp.children) {
        tmp.children = getFilteredRoutes(tmp.children, roles)
      }
      matchedRoute.push(tmp)
    }
  })
  return matchedRoute
}
