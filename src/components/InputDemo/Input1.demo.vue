<demo>
禁用用法
</demo>
<template>
<div>
    <DInput v-model="input" placeholder="请输入内容" :disabled="true"> </DInput>
</div>
</template>

<script lang="ts">
import DInput from "../../lib/Input/Input.vue";
import { ref } from 'vue'
export default {
  components: {
    DInput
  },
  setup() {
      const input = ref('');
      return { input }
  }
}
</script>
