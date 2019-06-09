<template>
  <el-container class="is-vertical">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </el-container>
</template>

<script>

import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'layout',
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<style>
  .el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0em;
  }
  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
