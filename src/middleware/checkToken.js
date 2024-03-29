export default async function ({ store, app, $axios }) {
  store.commit('categories/removeActive')

  const token = app.$cookies.get('authToken')
  if (token && store.state.user.displayName) {
    return;
  }
  if (token) {
    await $axios
      .$get('users/get', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        store.commit('user/login', {...res,token})
      })
      .catch((e) => {
        console.error(e)
        store.commit('user/logout')
        app.$cookies.remove('authToken')
      })
  }
}
