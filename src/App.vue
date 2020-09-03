<template>
<router-view />
</template>

<script lang="ts">
import {
    ref,
    provide
} from 'vue';
import { router } from './router'
export default {
    name: 'App',
    setup() {
        const width = document.documentElement.clientWidth;
        const menuVisible = ref(width <= 500 ? false : true) // set
        provide('menuVisible', menuVisible) // 所有的都可以使用
        router.afterEach(()=> {
            if( width <= 500 ) {
                menuVisible.value = false;
            }
        })
    }
}
</script>
