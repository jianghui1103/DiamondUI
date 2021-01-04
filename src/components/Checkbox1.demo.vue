<demo>
禁止选择
</demo>
<template>
<div>
  <Checkbox v-model:modelValue="checked" :disabled="true" @change="handleChange">备选项</Checkbox>
</div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import Checkbox from "../lib/Checkbox.vue";
export default {
  components: {
    Checkbox
  },
  setup(){
    const checked = ref(true);
    const handleChange = (value)=> {
      console.log(value)
    }
    return { checked,handleChange }
  }
}
</script>

