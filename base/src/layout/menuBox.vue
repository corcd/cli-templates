<template>
  <div class="menu-box" :class="{ 'z-active': getMenuList.length }">
    <div class="container" v-if="getMenuList.length">
      <vue-scroll>
        <ul class="menu-list">
          <li class="menu-item" v-for="(item, index) in getMenuList" :key="index">
            <a class="link" v-if="item.host" :href="`${item.host}${item.addr}`" :target="item.host">
              <span class="name">{{ item.label }}</span>
            </a>
            <router-link v-else class="link" :to="item.addr">
              <span class="name">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </vue-scroll>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuBox',
  data() {
    return {
      listId: window.CONSOLE_TYPE_KEY === 'channel' ? 180 : 149
    }
  },
  computed: {
    ...mapGetters({
      menuList: 'info/menuList'
    }),
    getMenuList() {
      let list = []
      this.menuList.forEach(item => {
        if (item.id === this.listId) {
          list = [...item.children]
        }
      })
      return list
    }
  }
}
</script>

<style lang="less" scoped>
.menu-box {
  position: relative;
  height: 100%;
  width: 200px;
  background-color: #333333;

  &.z-active {
    width: 200px;
  }
  .container {
    position: relative;
    z-index: 100;
    width: 60px;
    height: 100%;
    background-color: #333333;
    box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s;

    .top-box {
      display: flex;
      padding: 0 10px;
      height: 70px;
      line-height: 70px;
      overflow: hidden;

      .home {
        flex: 0 0 auto;
        width: 40px;
        text-align: center;

        .iconfont {
          font-size: 32px;
        }
      }
      .more {
        flex: 1;
        display: none;
        text-align: right;

        .iconfont {
          font-size: 25px;
        }
      }
      .link {
        cursor: pointer;
        color: #ffffff;
      }
    }
    .menu-list {
      .menu-item {
        width: 100%;
        height: 60px;
        line-height: 60px;
        white-space: nowrap;
        overflow: hidden;
        color: #ffffff;
        transition: all 0.3s;

        .link {
          display: flex;
          padding-left: 10px;
          width: 100%;
          height: 100%;
          text-align: left;
          color: #ffffff;

          .iconfont {
            flex: 0 0 auto;
            display: inline-block;
            vertical-align: middle;
            width: 40px;
            font-size: 25px;
            text-align: center;
          }
          .name {
            flex: auto;
            margin-left: 10px;
            vertical-align: middle;
            font-size: 16px;
            color: rgba(255, 255, 255, 1);
          }
          &:hover {
            background-color: #666666;
          }
          &.z-active {
            border-right: 7px solid #338df8;
          }
        }
      }
    }
  }
  .container {
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 60px;
    padding-top: 130px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    .menu-list {
      .item {
        width: 100%;
        height: 60px;
        line-height: 60px;
        white-space: nowrap;
        overflow: hidden;
        color: #ffffff;
        font-size: 14px;

        .link {
          display: block;
          padding-left: 10px;
          width: 100%;
          height: 100%;
          text-align: center;
          color: #ffffff;

          .name {
            vertical-align: middle;
            font-size: 16px;
            color: rgba(255, 255, 255, 1);
          }
          &:hover {
            background-color: #666666;
          }
          &.z-active {
            border-right: 7px solid #338df8;
          }
        }
      }
    }
  }
}
</style>
