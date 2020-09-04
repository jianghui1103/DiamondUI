<template>
    <div>
        dialog 实例
    </div>
    <h1>实例1</h1>
    <Button @click="toggle">toggle</Button>
    <!-- <Dialog :visible="isVisible" @update:visible = "isVisible = $event"></Dialog> -->
    <Dialog v-model:visible="isVisible" :closeOnClickOverlay="false" :cancel="cancel" :ok="ok"></Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue';
export default {
    components: {
        Dialog,
        Button
    },
    setup() {
        const isVisible = ref(false)
        const toggle = ()=>{
            isVisible.value = !isVisible.value
        }
        const cancel = ()=> {
            console.log('关闭')
        }
        const ok = ()=> {
            console.log('确认')
        }
        return { isVisible,toggle,cancel,ok }
    }
}
</script>
