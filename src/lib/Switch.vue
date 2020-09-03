<template>
    <div>
        <button @click="toggle" :class="{ checked: value }"> <span></span> </button>
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
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: green;
    border-radius: $h/2;
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  } 
  button.checked {
    background: blue;
  }
  button.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  button:focus{
      outline: none;
  }
</style>