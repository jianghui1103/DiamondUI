<template>
<div>
    <h1>Link 文字链接 </h1>
    <Demo :component="Link1Demo" />
    <Demo :component="Link2Demo" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Link1Demo from './Link1.demo.vue'
import Link2Demo from './Link2.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            Link1Demo,
            Link2Demo,
        }
    }
}
</script>
