<demo>
常规使用
</demo>
<template>
<div>
  <Link href="https://github.com/jianghui1103/DiamondUI" target="_blank"> 默认链接 </Link>
  <Link type="primary">主要链接</Link>
  <Link type="success">成功链接</Link>
  <Link type="warning">警告链接</Link>
  <Link type="danger">危险链接</Link>
  <Link type="info">信息链接</Link>
</div>
</template>

<script lang="ts">
import Link from "../lib/Link.vue";
export default {
  components: {
    Link
  }
}
</script>
