<template>
    <div>
        <Demo :component="TableDemo" />
        <Demo :component="TableDemo1" />
    </div>
</template>
<script lang="ts">
import Demo from '../Demo.vue'
import TableDemo from './Table.demo.vue'
import TableDemo1 from './Table1.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            TableDemo,
            TableDemo1
        }
    }
}
</script>