<template>
<div role="radiogroup">
    <slot/>
</div>
</template>

<script lang="ts">
export default {
    name: 'RadioGroup',
    componentName: 'RadioGroup',
    props: {
        value: String || Number || Boolean,
    }
}
</script>
