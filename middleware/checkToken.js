export default async function ({ store, app, $axios }) {
  const token = app.$cookies.get('authToken')
  if (token) {
    await $axios
      .$get('users/get', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = {
          token,
          email: res.email,
          displayName: res.displayName,
          photoURL: res.photoURL,
        }
        store.commit('user/login', data)
      })
      .catch((e) => {
        console.error(e)
        store.commit('user/logout')
        app.$cookies.remove('authToken')
      })
  }
}