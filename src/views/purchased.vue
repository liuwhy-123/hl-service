<template>
  <div>
    <el-page-header
      @back="$router.back()"
      :content="$route.name"
    ></el-page-header>
  </div>
</template>
<script>
export default {
  name: "PurchasedPage",
};
</script>
<style lang="scss" scoped>
.el-page-header {
  top: -20px;
  z-index: 999;
  position: sticky;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #ffffff;
}
</style>
