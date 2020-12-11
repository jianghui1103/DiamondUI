<template>
<div>
    <h1>Input 输入框 </h1>
    <Demo :component="InputDemo" />
    <Demo :component="InputDemo1" />
    <Demo :component="InputDemo2" />
</div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import InputDemo from './Input.demo.vue'
import InputDemo1 from './Input1.demo.vue'
import InputDemo2 from './Input2.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            InputDemo,
            InputDemo1,
            InputDemo2
        }
    }
}
</script>
