<template>
  <Layout class="layout">
    <Header class="header"></Header>
    <Layout>
      <Sider class="sider">
        <SideMenu></SideMenu>
      </Sider>
      <Content>
        <router-view></router-view>
      </Content>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Vue, Component } from 'vue-property-decorator'
import SideMenu from './side_menu.vue'

@Component({
  components: {
    SideMenu,
  },
})
export default class Main extends Vue {

}
</script>

<style lang="less" scoped>
.layout {
  min-height: 100vh;
  background: #F5F6FA;
  .header {
    background: #fff;
  }
  .sider {
    background: #fff;
  }
}
</style>
