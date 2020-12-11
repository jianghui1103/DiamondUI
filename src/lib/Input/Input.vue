<template>
  <div class="Diamond-input">
    <input
        class="Diamond-input__inner"
        :class="classes"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
    />
    <!-- 后置文件 -->
    <span class="Diamond-input__suffix" v-if="clearable">
      <span class="Diamond-input__suffix-inner">
        <img src="../../icons/clear.svg" alt="" srcset="" class="icons">
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
export default {
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        disabled: {
          type: Boolean,
          default: false
        },
        clearable: {
          type: Boolean,
          default: false
        }
    },
    setup(props) {
      const { disabled } = props;
      const classes = computed(()=>{
        return {
            [`Diamond-input-disabled`] : disabled,
          }
      })
      return {classes}
    }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.Diamond-input{
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  .Diamond-input__inner {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    &:hover,
    &:focus {
      border-color: $blue;
    }
    &.Diamond-input-disabled {
      &:hover,
      &:focus {
          border-color: $border-color;
      }
    }
  }
  .Diamond-input__suffix{
    position: absolute;
      height: 100%;
      right: 5px;
      top: 0;
      text-align: center;
      transition: all .3s;
      pointer-events: none;
  }
}
.Diamond-input{
  width: 140px;
}
.icons{
  width: 2em;
  height: 2em;
}

</style>
