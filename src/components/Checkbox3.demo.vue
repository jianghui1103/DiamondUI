<demo>
限制可选个数
</demo>
<template>
<div>
  <checkbox-group v-model:modelValue="checkList" :min="1" :max="2">
    <Checkbox label="复选框 A"></Checkbox>
    <Checkbox label="复选框 B"></Checkbox>
    <Checkbox label="复选框 C"></Checkbox>
  </checkbox-group>
</div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import Checkbox from "../lib/Checkbox.vue";
import CheckboxGroup from "../lib/CheckboxGroup.vue";
export default {
  components: {
    Checkbox,
    CheckboxGroup
  },
  setup(){
    const checkList = ref(['复选框 A'])
    const handleChange = (value)=> {
      console.log(value)
    }
    return { checkList }
  }
}
</script> 
