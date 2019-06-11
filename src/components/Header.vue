<template>
  <el-header>
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <el-menu mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <el-menu mode="horizontal">
            <el-menu-item index="1">开发者中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">解决方案</template>
              <el-menu-item index="2-1">赛事数据</el-menu-item>
              <el-menu-item index="2-2">预测数据</el-menu-item>
              <el-menu-item index="2-3">比分网站</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" disabled>价格方案</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            <el-menu-item index="5" disabled>消息中心</el-menu-item>
            <el-menu-item index="6">登录</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-content {
    min-height: 36px;
  }
</style>
