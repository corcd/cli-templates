<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: 'Child'
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 1px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  padding: 16px;
}
</style>
