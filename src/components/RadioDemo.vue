<template>
<div>
    <h1>Radio 单选框 </h1>
    <Demo :component="RadioDemo" />
    <Demo :component="RadioDemo1" />
    <Demo :component="RadioDemo2" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import RadioDemo from './Radio.demo.vue'
import RadioDemo1 from './Radio1.demo.vue'
import RadioDemo2 from './Radio2.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            RadioDemo,
            RadioDemo1,
            RadioDemo2
        }
    }
}
</script>
