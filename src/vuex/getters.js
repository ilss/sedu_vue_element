import state from './states'
const getters = {
  templates () {
    return state.templates
  },
  themeColor () {
    return state.themeColor
  },
  language: state => {
    return state.language
  },
  router: state => {
    return state.router.routes
  },
  showLoading (state) {
    return state.showLoading
  }
}
export default getters
