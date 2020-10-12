<template>
  <el-container>
    <el-header>
      <div class="hl">
        <img src="../assets/hl.png" style="width: 11%" />
        <img src="../assets/hl2.png" style="width: 11%" />
      </div>
      <el-menu
        :router="true"
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#4682B4"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/test/homePage">主页</el-menu-item>
        <el-submenu index="1">
          <template slot="title">公司产品</template>
          <el-menu-item index="/test/setMeal">金蝶财务软件</el-menu-item>
          <el-menu-item index="/">用友</el-menu-item>
          <el-menu-item index="/">金钥匙</el-menu-item>
          <el-menu-item index="/">管家佣</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">个人中心</template>
          <el-menu-item index="/test/modify">修改账号 / 密码</el-menu-item>
          <el-menu-item index="/test/purchased">已购商品信息</el-menu-item>
          <el-menu-item index="/test/shoppingCart">购物车</el-menu-item>
          <el-menu-item index="/test/browse">浏览信息</el-menu-item>
        </el-submenu>
        <el-menu-item index="/">联系我们</el-menu-item>
        <el-menu-item index="/">购买须知</el-menu-item>
        <el-menu-item index="/">登录</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "Menus",
  data() {
    return {
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
.el-container {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  background-color: #4682b4;
  padding-left: 20px;
  padding-right: 20px;
}
.el-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-menu {
  width: 40%;
}
.hl {
  width: 50%;
}
</style>