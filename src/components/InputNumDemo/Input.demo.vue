<demo>
常规使用
</demo>
<template>
<div>
    <InputNum > </InputNum>
</div>
</template>

<script lang="ts">
import InputNum from "../../lib/InputNum/InputNum.vue";
import { ref, computed } from 'vue'
export default {
  components: {
    InputNum
  },
  setup() {
      const input = ref('');
      return { input }
  }
}
</script>
