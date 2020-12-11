<template>
  <div class="Diamond-input">
    <input
        class="Diamond-input__inner"
        :class="classes"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        @input="handleInput"
    />
    <!-- 后置文件 -->
    <span class="Diamond-input__suffix" v-if="clearable" @click="handleClick">
      <span class="Diamond-input__suffix-inner">
        <img src="../../icons/clear.svg" alt="" srcset="" class="icons">
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, watchEffect, ref } from 'vue';
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
        },
        value: {
          type: String || Number,
          default: ''
        }
    },
    setup(props,context) {
      const { disabled,value } = props;
      const classes = computed(()=>{
        return {
            [`Diamond-input-disabled`] : disabled,
          }
      })
      
       const handleInput = (event) => {
         console.log(event)
          context.emit('input', event.target.value)
          context.emit('update:modelValue', event.target.value)
      }
      const handleClick = ()=> {
        context.emit('update:modelValue', '')
        context.emit('input', '')
        context.emit('change', '')
      }


      return {classes,handleInput,handleClick}
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
    background-color: #FFFFFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
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
    position:absolute;
    height:100%;
    right:5px;
    top:0;
    text-align:center;
    color:#c0c4cc;
    transition:all .3s;
    pointer-events:none;
    & .Diamond-input__suffix-inner{
      width: 100%;
      height: 100%;
      pointer-events: all;
    }
  }
}
.Diamond-input{
  width: 140px;
}
.icons{
  height: 100%;
}

</style>
