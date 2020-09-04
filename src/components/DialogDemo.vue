<template>
    <div>
        dialog 实例
    </div>
    <h1>实例1</h1>
    <Button @click="toggle">toggle</Button>
    <!-- <Dialog :visible="isVisible" @update:visible = "isVisible = $event"></Dialog> -->
    <Dialog 
        v-model:visible="isVisible" 
        :closeOnClickOverlay="false" 
        :cancel="cancel" :ok="ok"
    >   
        <template v-slot:title>
            <div>标题</div>
        </template>
        <template v-slot:content>
            <div>11111</div>
            <div>222</div>
        </template>
    </Dialog>
    <h1>实例2</h1>
    <Button @click="showDialog">open</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {openDialog} from '../lib/openDialog'
import { ref,h } from 'vue';
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
        const showDialog = ()=> {
            openDialog({
                title: h('strong',{},'标题'),
                content: '21323123',
                closeOnClickOverlay: false,
                ok: ()=> {
                    console.log('点击了确认')
                },
                cancel: ()=> {
                    console.log('点击了取消')
                },
                
            })
        }
        return { isVisible,toggle,cancel,ok,showDialog }
    }
}
</script>
