import { defineStore } from 'pinia'


export const userStore = defineStore('user', {
  state: () => {
    return {
      token: '' as string,
      userInfo: {} as NPage.IUser
    }
  },
  actions: {
    async login() {
      // 登录逻辑
    }
  },

})
