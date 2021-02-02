<template>
    <div>
        <Demo :component="SliderDemo" />
        <Demo :component="SliderDemo1" />
    </div>
</template>
<script lang="ts">
import Demo from '../Demo.vue'
import SliderDemo from './Slider.demo.vue'
import SliderDemo1 from './Slider1.demo.vue'
export default {
    components: { Demo },
    setup() {
        return {
            SliderDemo,
            SliderDemo1
        }
    }
}
</script>