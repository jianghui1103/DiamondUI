<demo>
Radio 单选框
</demo>
<template>
<div>
  <Radio v-model:value="radio" label="1" @change="handleChange">备选1</Radio>
  <Radio v-model:value="radio" label="2" @change="handleChange">备选项2</Radio>
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
    const radio = ref('1')
    const handleChange = (value)=>{
      console.log(value)
    }
    return {
      radio,
      handleChange
    }
  }
}
</script>
