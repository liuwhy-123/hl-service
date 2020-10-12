<template>
  <div class="test-page">
    <el-carousel  type="card" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="(item, index) in tableCount" :key="index">
        <img :src="item.img" style="width: 100%; height: 100%" />
      </el-carousel-item>
    </el-carousel>
    <el-footer height="35%">
      <div class="header">
        <div class="footer">
          <div class="content">
            <h4>产品</h4>
            <router-link :underline="false" :to="{path:'/test/setMeal'}"><el-link :underline="false">金蝶财务软件</el-link></router-link>
            <p><el-link :underline="false">用友</el-link></p>
            <p><el-link :underline="false">金钥匙</el-link></p>
            <p><el-link :underline="false">管家佣</el-link></p>
          </div>
        </div>
        <div class="footer">
          <div class="content">
            <h4>服务</h4>
            <p><el-link :underline="false">解决方案</el-link></p>
            <p><el-link :underline="false">快速体验</el-link></p>
            <p><el-link :underline="false">更新日志</el-link></p>
            <p><el-link :underline="false">服务条款</el-link></p>
          </div>
        </div>
        <div class="footer">
          <div class="content">
            <h4>公司</h4>
            <p><el-link :underline="false">关于我们</el-link></p>
          </div>
        </div>
        <div class="footer">
          <div class="content">
            <h4>联系我们</h4>
            <p><el-link :underline="false">电话:xxxxxxxx</el-link></p>
            <p><el-link :underline="false">QQ:xxxxxxxx</el-link></p>
            <p><el-link :underline="false">合作:xxxxxxx</el-link></p>
            <p><el-link :underline="false">地址: 重庆市渝北区</el-link></p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>footer</p>
      </div>
    </el-footer>
  </div>
</template>
<script>
import home from "@/data/home.js";
export default {
  name: "HomePage",
  data() {
    return {
      bannerHeight: 600,
    };
  },
  mounted: function () {
    this.$store.commit("all", home);
  },
  computed: {
    tableCount() {
      return this.$store.getters.home;
    },
  },
};
</script>
<style lang="scss" scoped>
.test-page {
  text-align: center;
  width: 100%;
  height: 100%;
}
.el-carousel {
  margin-bottom: 60px;
}
.el-footer {
  display: flex;
  flex-direction: column;
}
.footer {
  width: 25%;
  height: 100%;
}
.content {
  width: 50%;
  height: 100%;
  text-align: left;
  margin: 0 auto;
}
.el-link{
  font-size: small;
}
.header {
  width: 100%;
  height: 80%;
  display: flex;
  line-height: 27px;
}
.bottom {
  width: 100%;
  height: 20%;
}
</style>  