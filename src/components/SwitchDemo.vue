<template>
    <div>
        <!-- 自动监听 -->
        <Switch v-model:value="bool" />
        <!-- <Switch :value="y" @update:value=" y = $event" /> -->
    </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue';
export default {
    components : { Switch },
    setup() {
        const bool = ref(true)
        return {bool}
    }
}
</script>
