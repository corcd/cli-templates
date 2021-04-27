<template>
  <section class="bread">
    <Breadcrumb separator="/">
      <BreadcrumbItem>
        <router-link to="/">
          {{ getMenuRoot.label }}
        </router-link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <router-link :to="{ path: getMenuItem.addr }">
          {{ getMenuItem.label }}
        </router-link>
      </BreadcrumbItem>
    </Breadcrumb>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BreadcrumbBox',
  data() {
    return {
      routePath: ''
    }
  },
  computed: {
    ...mapGetters({
      menuList: 'info/menuList'
    }),
    getMenuRoot() {
      // eslint-disable-next-line array-callback-return
      const menuTree = this.menuList.filter(item => {
        if (item.id === 149 || item.id === 180) return item
      })
      console.log(menuTree[0])
      return menuTree[0] || []
    },
    getMenuItem() {
      console.log(this.getMenuRoot.children)
      const menuItem = this.getMenuRoot.children
        ? // eslint-disable-next-line array-callback-return
          this.getMenuRoot.children.filter(item => {
            if (this.routePath.includes(item.addr)) return item
          })
        : []
      return menuItem[0] || []
    }
  },
  watch: {
    $route: {
      handler(nv, ov) {
        this.routePath = nv.path
      },
      immediate: true
    }
  }
}
</script>

<style lang="less">
.guide {
  position: absolute;
  transform: translateY(-5px);
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background: #358df6;
  margin-left: 166px;
  color: #fff;
  cursor: pointer;
}
.guide:hover {
  background: #62a4f5;
}
*:focus {
  outline: none;
}
.bread {
  text-align: left;
  background-color: #f7f7f7;
  padding: 30px 0 14px 30px;
  .ivu-breadcrumb {
    background-color: transparent;
    span {
      &:last-child {
        font-weight: bold;
        a {
          color: #1db4ac;
        }
      }
    }
  }
}
</style>
