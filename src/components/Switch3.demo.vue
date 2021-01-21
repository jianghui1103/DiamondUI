<demo>
文字描述
</demo>
<template>
<Switch v-model:value="bool" 
  active-text="按月付费" 
  inactive-text="按年付费" 
  />
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>
