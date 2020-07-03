import { Module } from 'vuex'

interface State {
  username?: string;
  avatar?: string;
  token?: string;
  menus?: UserMenu;
}

interface UserMenuItem {
  title?: string;
  path?: string;
  icon?: string;
  dots?: string;
  component?: any;
  children?: UserMenuItem[];
}

type UserMenu = UserMenuItem[]

const module: Module<State, State> = {
  state: (): State => ({
    username: '',
    avatar: '',
    token: '',
    menus: [] as UserMenu,
  }),
  mutations: {
    setUsername (state: State, username: string) {
      state.username = username
    },
    setAvatar (state: State, avatar: string) {
      state.avatar = avatar
    },
    setToken (state: State, token: string) {
      state.token = token
    },
    setMenus (state: State, menus: UserMenu) {
      state.menus = menus
    },
  },
  getters: {
    menus (state) {
      return state.menus
    },
  },
  actions: {
    async getMenus (context, vm: any) {
      const mockMenus: UserMenu = [
        {
          title: '用户管理',
          path: '/user',
          children: [
            {
              title: '会员管理',
              path: '/user/vip',
            },
            {
              title: '品牌商账号',
              path: '/user/brand',
            },
          ],
        },
      ]
      const menus = await Promise.resolve(mockMenus)
      context.commit('setMenus', menus)
    },
  },
}

export default module
