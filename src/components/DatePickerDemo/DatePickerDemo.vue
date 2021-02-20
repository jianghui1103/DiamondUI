<template>
<div>
    <h1>Input 输入框 </h1>
    <Demo :component="DatePickerDemo" />
</div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import DatePickerDemo from './DatePicker.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            DatePickerDemo
        }
    }
}
</script>
