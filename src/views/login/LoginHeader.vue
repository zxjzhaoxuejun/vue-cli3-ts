<template>
  <div class="layout-page">
    <div class="page-center">
      <div class="info">
        <div class="title">
          <img class="img" src="@/assets/logo.png" alt="京东" />
          <span class="b-title">京东在线</span>
        </div>
        <div class="detail">
          <span>京东在线，让每一个人在平台自由选择喜欢的物品</span>
        </div>
      </div>
      <!-- 插槽 -->
      <div class="container">
        <slot name="container"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class LayoutHeader extends Vue {}
</script>

<style lang="scss">
.layout-page {
  width: 100%;
  height: 100%;

  .page-center {
    padding: 20px;
  }

  .detail {
    text-align: center;
    font-size: 12px;
    color: #666;
    padding: 10px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      width: 40px;
      margin-right: 10px;
    }

    .b-title {
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }
  }

  .container {
    width: 84%;
    padding: 15px 3%;
    margin: 10px auto;
    border: 1px #dedede solid;
    border-radius: 5px;
    box-shadow: 1px 2px 6px rgba(153, 152, 152, 0.5); /*blur值为10px*/
  }
}
</style>