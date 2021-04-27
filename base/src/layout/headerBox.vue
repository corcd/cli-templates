<template>
  <div class="header-box"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderBox',
  computed: {
    ...mapGetters({
      userInfo: 'info/userInfo'
    })
  }
}
</script>

<style lang="less" scoped>
.header-box {
  padding: 0 50px;
  height: 100%;
  text-align: right;

  .menu {
    height: 100%;
    display: inline-block;

    .item {
      display: inline-block;
      vertical-align: middle;
      margin-left: 15px;
      font-size: 14px;
      color: rgba(102, 102, 102, 1);
      cursor: pointer;

      a {
        color: rgba(102, 102, 102, 1);
      }
      &:hover {
        color: rgba(31, 181, 173, 1);

        a {
          color: rgba(31, 181, 173, 1);
        }
      }
      .iconfont {
        vertical-align: middle;
        font-size: 22px;
        margin-right: 5px;
      }
    }
    .head {
      margin-left: 25px;
      text-align: center;

      .drop-down {
        height: 40px;
        line-height: 40px;
        vertical-align: middle;

        .name {
          vertical-align: middle;
        }
        .head {
          margin-left: 5px;
          display: inline-block;
          vertical-align: middle;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .iconfont {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
}
</style>
