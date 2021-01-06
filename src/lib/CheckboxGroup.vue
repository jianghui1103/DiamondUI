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
        modelValue: Array,
        min: Number || String,
        max: Number || String,
    },
    setup(props,context) {
    },
    emits: ['update:value','change'],
}
</script>