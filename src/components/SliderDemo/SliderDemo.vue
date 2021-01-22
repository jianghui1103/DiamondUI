<template>
    <div>
        <Demo :component="SliderDemo" />
    </div>
</template>
<script lang="ts">
import Demo from '../Demo.vue'
import SliderDemo from './Slider.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            SliderDemo
        }
    }
}
</script>