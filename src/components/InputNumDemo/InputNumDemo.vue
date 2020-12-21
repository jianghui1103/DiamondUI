<template>
<div>
    <h1>InputNum 输入框 </h1>
    <Demo :component="InputNumDemo" />
    <Demo :component="InputNumDemo1" />
</div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import InputNumDemo from './InputNum.demo.vue'
import InputNumDemo1 from './InputNum1.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            InputNumDemo,
            InputNumDemo1
        }
    }
}
</script>
