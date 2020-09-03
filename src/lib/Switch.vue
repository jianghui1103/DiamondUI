<template>
    <div>
        <button class="Diamond-switch" @click="toggle" :class="{ 'Diamond-checked' : value }"> <span></span> </button>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
    props: {
      value: Boolean
    },
    setup(props,context) {
        const toggle = ()=> {
          // 参数是 事件名 事件参数      父元素的$event的值是emit 的第二个参数
          context.emit('update:value', !props.value) // 触发父元素的input 事件 
        }
        return {toggle}
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