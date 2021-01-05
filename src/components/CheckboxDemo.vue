<template>
<div>
    <h1>Checkbox 复选框 </h1>
    <Demo :component="CheckboxDemo" />
    <Demo :component="CheckboxDemo1" />
    <Demo :component="CheckboxDemo2" />
    <Demo :component="CheckboxDemo3" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import CheckboxDemo from './Checkbox.demo.vue'
import CheckboxDemo1 from './Checkbox1.demo.vue'
import CheckboxDemo2 from './Checkbox2.demo.vue'
import CheckboxDemo3 from './Checkbox3.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            CheckboxDemo,
            CheckboxDemo1,
            CheckboxDemo2,
            CheckboxDemo3
        }
    }
}
</script>
