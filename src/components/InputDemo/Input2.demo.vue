<demo>
清除输入框
</demo>
<template>
<div>
    <DInput v-model="input" placeholder="请输入内容" clearable> </DInput>
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
