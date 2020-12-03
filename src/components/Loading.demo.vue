<demo>
常规使用
</demo>
<template>
<div>
  <Button @click="openFullScreen1"
    v-loading.lock="fullscreenLoading">Loading</Button>
  <Button @click="openFullScreen2">指令执行</Button>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { ref } from 'vue'
import { useLoading } from '../lib/Loading'
export default {
  components: {
    Button
  },
  setup(){
    
    let fullscreenLoading = ref(false);
    let $loading = useLoading()

    function openFullScreen1() {
      fullscreenLoading.value = true
      setTimeout(() => {
        fullscreenLoading.value = false
      }, 2000)
    }
    function openFullScreen2() {
      const loading = $loading()
      setTimeout(() => {
          loading.close()
      }, 2000)
    }
    return {
      fullscreenLoading,openFullScreen1,openFullScreen2
    }
  }
}
</script>
