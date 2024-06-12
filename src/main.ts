import { createSSRApp } from "vue";
import uviewPlus from 'uview-plus'
import * as Pinia from 'pinia'
import { createUnistorage } from "pinia-plugin-unistorage";
import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus)
  const store = Pinia.createPinia()
  store.use(createUnistorage())
  app.use(store)
  return {
    app,
    Pinia
  };
}
