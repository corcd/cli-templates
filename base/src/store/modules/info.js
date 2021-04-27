/* eslint-disable no-shadow */
import API from '@/api'
import VueCookies from 'vue-cookies'

const state = {
  token: '',
  userInfo: {},
  menuList: []
}
const mutations = {
  SET_TOKEN(state, str) {
    state.token = str
  },
  SET_USERINFO(state, obj) {
    state.userInfo = Object.assign(
      {
        uin: 0,
        company: '',
        realName: '',
        dmsKeyInfo: ''
      },
      obj
    )
  },
  SET_MENULIST(state, arr) {
    state.menuList = [...arr]
  }
}
const actions = {
  async setUserInfo(context) {
    try {
      const token = VueCookies.get('CONSOLE_TOKEN_GDY')
      context.commit('SET_TOKEN', token)
      const data = {}
      const res = await API.business.getLogin(data)
      const info = {
        uin: res.data.data.uin,
        company: res.data.data.company,
        realName: res.data.data.realName,
        dmsKeyInfo: JSON.parse(res.data.data.dmsKeyInfo)
      }
      context.commit('SET_USERINFO', info)
      context.commit('SET_MENULIST', res.data.data.newMenuList)
    } catch (err) {
      console.log(err)
    }
  }
}
const getters = {
  menuList(state) {
    return state.menuList || []
  },
  userInfo(state) {
    return state.userInfo || {}
  }
}
export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
