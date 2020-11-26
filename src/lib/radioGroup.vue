<template @change="test">
<div role="radiogroup">
    <slot/>
</div>
</template>

<script lang="ts">
import { watch, toRefs } from 'vue'
export default {
    name: 'RadioGroup',
    componentName: 'RadioGroup',
    props: {
        value: String || Number || Boolean,
    },
    emits: ['update:value','change'],
    setup(props) {
        const { value } = toRefs(props)
    }
}
</script>
