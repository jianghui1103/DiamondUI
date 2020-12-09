<template>
<div>
    <h1>Checkbox 复选框 </h1>
    <Demo :component="InputDemo" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import InputDemo from './Input.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            InputDemo
        }
    }
}
</script>
