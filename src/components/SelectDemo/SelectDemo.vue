<template>
    <div>
        <Demo :component="SelectDemo" />
        <Demo :component="SelectDemo1" />
    </div>
</template>
<script lang="ts">
import Demo from '../Demo.vue'
import SelectDemo from './Select.demo.vue'
import SelectDemo1 from './Select1.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            SelectDemo,
            SelectDemo1
        }
    }
}
</script>