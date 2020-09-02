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
        const menuVisible = ref(false) // set
        provide('xxx', menuVisible) // 所有的都可以使用
    }
}
</script>
