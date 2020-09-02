<template>
<router-view />
</template>

<script lang="ts">
import {
    ref,
    provide
} from 'vue';
export default {
    name: 'App',
    setup() {
        const width = document.documentElement.clientWidth;
        console.log(width)
        const menuVisible = ref(width <= 500 ? false : true) // set
        console.log(menuVisible)
        provide('menuVisible', menuVisible) // 所有的都可以使用
    }
}
</script>
