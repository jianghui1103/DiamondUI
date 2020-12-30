<demo>
选项组
</demo>
<template>
<div>
  <RadioGroup v-model:value="radio" @change="handleChange">
    <Radio label="1" >备选1</Radio>
    <Radio label="2" >备选项2</Radio>
    <Radio label="3" >备选项2</Radio>
  </RadioGroup>
</div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import Radio from "../lib/Radio.vue";
import RadioGroup from "../lib/RadioGroup.vue";
export default {
  components: {
    Radio,
    RadioGroup
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
