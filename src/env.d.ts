/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 接口类型放到此处
declare namespace NPage {

  declare interface IUser {
    id?: string | number;
    avatar?: string;
    mobile?: string | number;
    nickname: string;
  }
}
