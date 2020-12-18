<template>
<div>
    <h1>Input 输入框 </h1>
    <Demo :component="InputNumDemo" />
</div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import InputNumDemo from './InputNum.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            InputNumDemo,
        }
    }
}
</script>
