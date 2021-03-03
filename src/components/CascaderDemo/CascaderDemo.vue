<template>
<div>
    <h1>基础用法</h1>
    <Demo :component="CascaderDemo" />
    <Demo :component="CascaderDemo1" />
</div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import CascaderDemo from './Cascader.demo.vue'
import CascaderDemo1 from './Cascader1.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            CascaderDemo,
            CascaderDemo1
        }
    }
}
</script>