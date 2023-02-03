import { defineStore } from 'pinia'   // 导入 defineStore

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，
// 同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，
// `useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore('user', {
  // 其他配置...
  state: () => ({
    managerInfo: {}   // {  user: {}, token: '' }
    }),
    getters: {
        getUserId() {
            return this.managerInfo.user ? this.managerInfo.user.id : 0
        },
        getUser() {
            return this.managerInfo.user || {}
        },
        getBearerToken() {
            return this.managerInfo.token ? 'Bearer ' + this.managerInfo.token : ''
        },
        getToken() {
            return this.managerInfo.token || ""
        }
    },
    actions: {
        setManagerInfo(managerInfo) {
            this.managerInfo = managerInfo
        },
        setUser(user) {
            this.managerInfo.user = JSON.parse(JSON.stringify(user))
            // this.loginInfo.user = user
        }
    },
    //数据持久化
    persist: true
})