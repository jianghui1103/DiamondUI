<template>
    <div>
        <Demo :component="SelectDemo" />
        <Demo :component="SelectDemo1" />
        <Demo :component="SelectDemo2" />
        <Demo :component="SelectDemo3" />
        <Demo :component="SelectDemo4" />
    </div>
</template>
<script lang="ts">
import Demo from '../Demo.vue'
import SelectDemo from './Select.demo.vue'
import SelectDemo1 from './Select1.demo.vue'
import SelectDemo2 from './Select2.demo.vue'
import SelectDemo3 from './Select3.demo.vue'
import SelectDemo4 from './Select4.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            SelectDemo,
            SelectDemo1,
            SelectDemo2,
            SelectDemo3,
            SelectDemo4
        }
    }
}
</script>