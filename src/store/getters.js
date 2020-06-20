const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  user: state => state.user.user,
  sidebar: state => state.app.sidebar
}

export default getters
