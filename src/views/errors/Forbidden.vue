<template>
  <div class="error-page">
    <el-empty description="无权限访问该页面（403）">
      <el-button
        type="primary"
        @click="goBack"
      >
        返回上一页
      </el-button>
      <el-button @click="$router.push('/')">
        返回登录
      </el-button>
    </el-empty>
  </div>
</template>

<script>
export default {
  name: 'ForbiddenPage',
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.error-page {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
