<template>
  <div class="main-box">
    <div class="side">
      <MenuBox></MenuBox>
    </div>
    <div class="main">
      <div class="header">
        <HeaderBox></HeaderBox>
      </div>
      <div class="breadcrumb">
        <BreadcrumbBox></BreadcrumbBox>
      </div>
      <div class="content">
        <div class="center-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBox from '@/layout/menuBox.vue'
import HeaderBox from '@/layout/headerBox.vue'
import BreadcrumbBox from '@/layout/breadcrumbBox.vue'

export default {
  name: 'Home',
  components: { MenuBox, HeaderBox, BreadcrumbBox }
}
</script>

<style lang="less" scoped>
.main-box {
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #f7f7f7;

  .side {
    flex: 0 0 auto;
    width: auto;
    height: 100%;
    background: rgba(51, 51, 51, 1);
  }
  .main {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .header {
    flex: 0 0 auto;
    padding: 0;
    height: 70px;
    line-height: 70px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
  .content {
    flex: auto;
    width: 100%;
    padding: 30px;
    height: calc(100vh - 70px);
    overflow-x: hidden;
    overflow-y: auto;
    background: #f7f7f7;

    .center-content {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
