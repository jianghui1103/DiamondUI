<template>
    <input
        class="Diamond-input"
        :class="classes"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
    >
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
        loading: {
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
.Diamond-input {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
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
</style>
