<demo>
Radio 单选框
</demo>
<template>
<div>
  <Radio v-model:value="radio" label="1">备选项1</Radio>
  <Radio v-model:value="radio" label="2">备选项2</Radio>
</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Radio from "../lib/Radio.vue";
export default {
  components: {
    Radio
  },
  setup() {
    const radio = ref('1')
    return {
      radio
    }
  }
}
</script>
