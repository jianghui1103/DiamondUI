<template>
    <div>
        <Demo :component="SelectDemo" />
    </div>
</template>
<script lang="ts">
import Demo from '../Demo.vue'
import SelectDemo from './Select.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            SelectDemo
        }
    }
}
</script>