export const state = () => ({
  email: '',
  photoURL: '',
  displayName: '',
  token: '',
  coins:'',
  isAdmin:false,
  dialog:false,
})

export const mutations = {
  login(state, data) {
    state.email = ""
    state.photoURL = ""
    state.displayName = ""
    state.token = ""
    state.isAdmin = false
    state.coins = ""

    Object.entries(data).forEach(
      ([key, value]) => (state[key] = value)
    );
  },
  logout(state) {
    state.email = ""
    state.photoURL = ""
    state.displayName = ""
    state.token = ""
  },
  popupToggle(state){
    state.dialog=!state.dialog;
  }
}
