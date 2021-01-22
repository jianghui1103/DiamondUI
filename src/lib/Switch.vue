<template>
    <div @click="toggle" >
        <span class="Diamond-switch__label Diamond-switch__label--left" :class="{ 'is-checked' : !value }">{{activeText}}</span> 
        <button :disabled="true" class="Diamond-switch" :style="switchStyle" :class="{ 'Diamond-checked' : value }"> <span></span> </button>
        <span class="Diamond-switch__label Diamond-switch__label--right" :class="{ 'is-checked' : value }">{{inactiveText}}</span>
    </div>
</template>

<script lang="ts">
import { ref,reactive } from 'vue';
export default {
    props: {
      value: Boolean,
      disabled: {
        type: Boolean,
        default: false
      },
      activeText: String || Boolean || Number,
      inactiveText: String || Boolean || Number,
      activeColor: String,
      inactiveColor: String,
    },
    setup(props,context) {
        const switchStyle = reactive({});
        if(props.inactiveColor) switchStyle.background = props.inactiveColor;
        const toggle = ()=> {
          if(props.disabled) return;
          // 参数是 事件名 事件参数      父元素的$event的值是emit 的第二个参数
          context.emit('update:value', !props.value) // 触发父元素的input 事件 
          if(props.value) {
            switchStyle.background = props.inactiveColor;         
          }else{
            switchStyle.background = props.activeColor;
          }
        }
        return {toggle,switchStyle}
    }
}
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  .Diamond-switch{
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
    vertical-align: middle;
    &__label{
      transition: .2s;
      height: 22px;
      line-height: 22px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      vertical-align: middle;
      color: #303133;
      &--left{
        margin-right: 10px;
      }
      &--right{
        margin-left: 10px;
      }
      &.is-checked{
        color: #1890ff;
      }

    }
    > span{
      position: absolute;
      top: 2px;
      left: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background:white;
      border-radius: $h2 / 2;
      transition: all 250ms;
    } 
      &.Diamond-checked {
      background: #1890ff;
        > span {
          left: calc(100% - #{$h2} - 2px);
        }
      }
      &:focus{
          outline: none;
      }
      &:active{
        > span {width: $h2 + 4px;}
      }
      &.Diamond-checked:active{
        > span {width: $h2 + 4px; margin-left: -4px;}
      }
  }
  

</style>