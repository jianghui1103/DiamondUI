<demo>
基础用法
</demo>
<template>
<div class="slider-demo">
  <div class="block">
    <span class="demonstration">默认</span>
    <Diamond-slider v-model="value1"></Diamond-slider>
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <Diamond-slider v-model="value2"></Diamond-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <Diamond-slider v-model="value5" disabled></Diamond-slider>
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
      const value1 = ref(0)
      const value2 = ref(50)
      const value3 = ref(36)
      const value4 = ref(48)
      const value5 = ref(42)

      const formatTooltip = (val) => {
        return val / 100
      }

      return {
        value1,
        value2,
        value3,
        value4,
        value5,
        formatTooltip
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