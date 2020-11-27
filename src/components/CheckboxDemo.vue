<template>
<div>
    <h1>Checkbox 复选框 </h1>
    <Demo :component="CheckboxDemo" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import CheckboxDemo from './Checkbox.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            CheckboxDemo
        }
    }
}
</script>
