<template>
    <div>
        <!-- 自动监听 -->
        <Switch v-model:value="y" />
        <!-- <Switch :value="y" @update:value=" y = $event" /> -->
    </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue';
export default {
    components : { Switch },
    setup() {
        const y = ref(true)
        return {y}
    }
}
</script>
