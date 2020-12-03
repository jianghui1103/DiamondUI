<template>
  <transition name="Diamond-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="Diamond-loading-mask"
      :class="[{ 'is-fullscreen': fullscreen }]"
    >
      <div class="Diamond-loading-spinner">
        <span class="Diamond-loadingIndicator"></span>
        <p v-if="text" class="Diamond-loading-text">{{text}}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue, { reactive,toRefs } from 'vue'
import Button from "../lib/Button.vue";
export default {
    props: {
        text: {
            type: String,
            default: null
        },
        fullscreen: {
            type: Boolean,
            default: true
        },
        visible: {
            type: Boolean,
            default: true
        }
    },

    setup(props, { emit }) {
        const $data = reactive({...props})
        const handleAfterLeave = ()=> {
            emit('afterleave');
        }
        const show = () => {
            $data.visible = true
        }
        const close = () => {
            $data.visible = false
        }
        const setText = (text) => {
            $data.text = text
        } 
        return {
            ...toRefs($data),
            handleAfterLeave,
            show,
            close,
            setText
        }
    }
}
</script>

<style lang="scss">
$blue: #40a9ff;
.Diamond-loading-mask{
    position: absolute;
    z-index: 2000;
    background-color: rgba(255, 255, 255, .9);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.3s;
    & .Diamond-loading-spinner {
        top: 50%;
        width: 100%;
        text-align: center;
        position: absolute;
        & .Diamond-loading-text {
            margin: 3px 0;
            font-size: 14px;
        }
    }
}
.Diamond-loadingIndicator{
    width: 50px;
    height: 50px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 25px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: Diamond-spin 1s infinite linear;
}
.is-fullscreen{
    position: fixed;
}
  @keyframes Diamond-spin {
    0%{transform: rotate(0deg)} 
    100%{transform: rotate(360deg)} 
  }	
</style>
