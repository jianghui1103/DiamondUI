<template>
    <a class="Diamond-link"
        :class="classes"
        :href="href"
        :target="target"
    >
      <span v-if="loading" class="Diamond-loadingIndicator"></span>
        <slot />
    </a>
</template>

<script lang="ts">
import { computed } from 'vue';
export default {
    props: {
        type: {
            type: String,
            default: 'link'
        },
        href: {
            type: String,
            default: 'javascript:;'
        },
        target: {
            type: String,
            default: '_self'
        },
        disabled: {
          type: Boolean,
          default: false
        },

    },
    setup(props) {
      const { type, disabled } = props;
      const classes = computed(()=>{
        return {
            [`Diamond-type-${type}`] : type,
            ['is-disabled']: disabled
          }
      })
      return {classes}
    }
}
</script>

<style lang="scss">
$h: 20px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
$warn: #F56C6C;
$green: #67C23A;
$info: #909399;
.Diamond-link {
  box-sizing: border-box;
  white-space: nowrap;
  background: white;
  color: $color;
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
    text-decoration: underline;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.Diamond-type-link{
    color: $color;
    &:hover,&:focus{
      color: lighten($color, 10%);
    }
  }
  &.Diamond-type-primary{
    color: $blue;
    &:hover,&:focus{
      color: lighten($blue, 10%);
    }
  }
  &.Diamond-type-success{
    color: $green;
    &:hover,&:focus{
      color: lighten($green, 10%);
    }
  }
  &.Diamond-type-danger{
    color: $red;
    &:hover,&:focus{
      color: lighten($red, 10%);
    }
  }
  &.Diamond-type-info{
    color: $info;
    &:hover,&:focus{
      color: lighten($info, 10%);
    }
  }

  &.is-disabled{
    color: #C0C4CC;
    cursor: not-allowed;
    text-decoration: none;
  }

  >.Diamond-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: Diamond-spin 1s infinite linear;
  }
  @keyframes Diamond-spin {
    0%{transform: rotate(0deg)} 
    100%{transform: rotate(360deg)} 
  }	
}
</style>
