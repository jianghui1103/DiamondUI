<demo>
多选框组
</demo>
<template>
<div>
  <checkbox-group v-model:modelValue="checkList" @change="handleChange">
    <Checkbox label="复选框 A"></Checkbox>
    <Checkbox label="复选框 B"></Checkbox>
    <Checkbox label="复选框 C"></Checkbox>
    <Checkbox label="禁用" disabled></Checkbox>
    <Checkbox label="选中且禁用" disabled></Checkbox>
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
    const checkList = ref(['选中且禁用', '复选框 A'])
    const handleChange = (value)=> {
      console.log(value)
    }
    return { checkList }
  }
}
</script> 
