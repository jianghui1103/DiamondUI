<demo>
密码输入框
</demo>
<template>
<div>
    <DInput v-model:modelValue="input" placeholder="密码框" show-password> </DInput>
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
