import { defineStore } from 'pinia'

export const useCouterStore = defineStore('counter', {

  state: () => {
    return { counter: 0 }
  },
  actions: {
    increment() {
      this.counter ++
    }
  }
})
