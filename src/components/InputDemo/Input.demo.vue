<demo>
常规使用
</demo>
<template>
<div>
    <DInput v-model="input" placeholder="输入框"> </DInput>
</div>
</template>

<script lang="ts">
import DInput from "../../lib/Input/Input.vue";
import { ref, computed } from 'vue'
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
