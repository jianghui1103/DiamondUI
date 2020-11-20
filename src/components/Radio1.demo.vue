<demo>
禁选状态
</demo>
<template>
<div>
  <Radio v-model:value="radio" label="1" disabled>备选1</Radio>
  <Radio v-model:value="radio" label="2" disabled>备选项2</Radio>
</div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import Radio from "../lib/Radio.vue";
export default {
  components: {
    Radio
  },
  setup() {
    const radio = ref('2')
    return {
      radio,
    }
  }
}
</script>
