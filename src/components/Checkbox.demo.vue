<demo>
基础用法
</demo>
<template>
<div>
  <Checkbox v-model:value="checked" >备选项</Checkbox>
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
    const checked = ref(true)
    return { checked }
  }
}
</script>

