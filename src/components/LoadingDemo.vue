<template>
<div>
    <h1>Loading 加载 </h1>
    <Demo :component="LoadingDemo" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import LoadingDemo from './Loading.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            LoadingDemo
        }
    }
}
</script>
