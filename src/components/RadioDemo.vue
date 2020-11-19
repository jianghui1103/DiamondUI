<template>
<div>
    <h1>Radio 单选框 </h1>
    <Demo :component="RadioDemo" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import RadioDemo from './Radio.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            RadioDemo,
        }
    }
}
</script>
