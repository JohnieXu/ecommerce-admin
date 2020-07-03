<template>
  <div class="side-menu">
    <Menu active-name="1-2" width="auto" @on-select="handleMenuSelect">
        <Submenu name="1">
          <template v-slot:title>用户管理</template>
          <MenuItem name="1-1">
            <span>会员管理</span>
          </MenuItem>
          <MenuItem name="1-2">
            <span>收货地址</span>
          </MenuItem>
          <MenuItem name="1-3">
            <span>会员收藏</span>
          </MenuItem>
          <MenuItem name="1-4">
            <span>搜索历史</span>
          </MenuItem>
        </Submenu>
        <Submenu name="2">
          <template v-slot:title>商场管理</template>
          <MenuItem name="2-1">
            <span>品牌制造商</span>
          </MenuItem>
          <MenuItem name="2-2">
            <span>商品类目</span>
          </MenuItem>
          <MenuItem name="2-3">
            <span>订单管理</span>
          </MenuItem>
          <MenuItem name="2-4">
            <span>商品列表</span>
          </MenuItem>
          <MenuItem name="2-5">
            <span>商品上架</span>
          </MenuItem>
          <MenuItem name="2-6">
            <span>商品评论</span>
          </MenuItem>
        </Submenu>
        <Submenu name="3">
          <template v-slot:title>系统管理</template>
          <MenuItem name="3-1">
            <span>管理员</span>
          </MenuItem>
          <MenuItem name="3-2">
            <span>消息通知</span>
          </MenuItem>
          <MenuItem name="3-3">
            <span>角色管理</span>
          </MenuItem>
          <MenuItem name="3-4">
            <span>操作日志</span>
          </MenuItem>
          <MenuItem name="3-5">
            <span>对象存储</span>
          </MenuItem>
        </Submenu>
        <Submenu name="4">
          <template v-slot:title>统计报表</template>
          <MenuItem name="4-1">
            <span>用户统计</span>
          </MenuItem>
          <MenuItem name="4-2">
            <span>订单统计</span>
          </MenuItem>
          <MenuItem name="4-3">
            <span>商品统计</span>
          </MenuItem>
        </Submenu>
    </Menu>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Watch, Component } from 'vue-property-decorator'

@Component
export default class SideMenu extends Vue {
  public handleMenuSelect (name: string) {
    console.log(name)
    if (name === '1-1') {
      // 会员管理
      this.$router.push('/user/vip')
    }
  }
}
</script>

<style lang="less" scoped>
.side-menu {
  max-height: calc(100% - 64px);
  overflow-y: auto;
}
</style>
