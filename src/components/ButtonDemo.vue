<template>
    <div>
        <Button >nihao</Button>
        <Button theme="button">nihao</Button>
        <Button theme="link">nihao</Button>
        <Button theme="text">nihao</Button>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: { Button },
    setup() {
        const onClick = ()=> {
            console.log('hi');
        }
        return {onClick}
    }
}
</script>
