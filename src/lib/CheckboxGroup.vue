<template>
<div role="checkboxgroup">
    <slot/>
</div>  
</template>

<script lang="ts">
import Vue from 'vue'
export default {
    name: 'checkboxGroup',
    props: {
        modelValue: Array
    },
    setup(props,context) {
    },
    emits: ['update:value','change'],
}
</script>