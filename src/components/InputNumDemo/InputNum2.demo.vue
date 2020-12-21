
<demo>
步数
</demo>
<template>
<div>
    <input-num v-model:modelValue="num" :step="2"> </input-num>
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
      const num = ref(2)
      return {
        num
      }
  }
}
</script>