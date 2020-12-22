<template>
<div>
    <li 
    class="Diamond-select-dropdown__item hover"
    :class="{
        hover: hover
    }"
    >
        <slot>
            <span>{{ label }}</span>
        </slot>
    </li>
</div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
export default {
    props: {
        value: {
            required: true
        },
        label: [String, Number],
        created: Boolean,
    },
    setup() {
        const data = reactive({
            hover: false
        })
        return {
            ...toRefs(data)
        }
    }
}
</script>

<style lang="scss">

</style>