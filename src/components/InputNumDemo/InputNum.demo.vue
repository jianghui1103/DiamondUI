<demo>
常规使用
</demo>
<template>
<div>
    <input-num v-model:modelValue="num" @change="handleChange" :min="1" :max="10" > </input-num>
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
      const num = ref(10)
      const handleChange = (value)=>{
        console.log(value);
      }
      return {
        num,
        handleChange
      }
  }
}
</script>
