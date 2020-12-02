<demo>
常规使用
</demo>
<template>
<div>
  <Button @click="openFullScreen1"
    v-loading.lock="fullscreenLoading">Loading</Button>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { ref } from 'vue'
export default {
  components: {
    Button
  },
  setup(){
    let fullscreenLoading = ref(false);
    function openFullScreen1() {
      fullscreenLoading.value = true
      setTimeout(() => {
        fullscreenLoading.value = false
      }, 2000)
    }
    return {
      fullscreenLoading,openFullScreen1
    }
  }
}
</script>
