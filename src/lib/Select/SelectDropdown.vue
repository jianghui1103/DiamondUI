<template>
    <div class="Diamond-select-drop"
        :style="{
        }"
    >
        <slot />
    </div>
</template>
<script lang="ts">
import { inject } from 'vue'
export default {
    setup() {
        const select = inject('select')
        console.log(select)
    }
}
</script>