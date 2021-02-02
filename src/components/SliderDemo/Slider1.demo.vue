<demo>
离散值
</demo>
<template>
<div class="slider-demo">
  <div class="block">
    <span class="demonstration">默认</span>
    <Diamond-slider v-model:modelValue="value" :step="10"></Diamond-slider>
  </div>
</div>
</template>
<script lang="ts">
  import { ref } from 'vue'
  import DiamondSlider from '../../lib/Slider/Slider.vue'
  export default {
    components: {
      DiamondSlider,
    },
    setup() {
      const value = ref(0)
      return {
        value,
      }
    }
  }
</script>

<style lang="scss">
.slider-demo{
  padding: 30px 24px;
  overflow: hidden;
  border-bottom: 1px solid #eff2f6;
  & .demonstration {
      font-size: 14px;
      color: #8492a6;
      line-height: 44px;
  }
  & .demonstration+.Diamond-slider {
    float: right;
    width: 70%;
    margin-right: 20px;
  }
}

</style>