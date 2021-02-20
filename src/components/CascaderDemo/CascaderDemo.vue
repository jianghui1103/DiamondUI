<template>
<div>
    <h1>基础用法</h1>
    <Demo :component="CascaderDemo" />
</div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import CascaderDemo from './Cascader.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            CascaderDemo
        }
    }
}
</script>