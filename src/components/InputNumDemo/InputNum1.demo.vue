<demo>
禁用状态
</demo>
<template>
<div>
    <input-num v-model:modelValue="num" :disabled="true"> </input-num>
</div>
</template>

<script lang="ts">
import InputNum from "../../lib/InputNum/InputNum.vue";
import { ref } from 'vue'
export default {
  components: {
    InputNum
  },
  setup() {
      const num = ref(1)
      return {
        num
      }
  }
}
</script>
