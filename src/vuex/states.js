import Cookies from 'js-cookie'
const state = {
  isLoadedTemp: false,
  templates: 'blue',
  themeColor: '#1f4665',
  language: Cookies.get('language') || 'zh',
  showLoading: true,
  skins: [
    { name: 'blue', template: 'blue', color: '#108EBC' },
    { name: 'green', template: 'green', color: '#026230' },
    { name: 'red', template: 'red', color: '#D31313' },
    { name: 'purple', template: 'blue', color: '#6B16C1' },
    { name: 'default', template: 'green', color: '#108EBC' }
  ]
}

export default state
