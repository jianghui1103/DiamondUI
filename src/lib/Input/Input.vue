<template>
    <input
        class="Diamond-input"
        :placeholder="placeholder"
        :type="type"
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
      const { theme,size,level } = props;
      const classes = computed(()=>{
        return {
            [`Diamond-theme-${theme}`] : theme,
            [`Diamond-size-${size}`] : size,
            [`Diamond-level-${level}`] : level,
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
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.Diamond-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,&:focus{
      color: lighten($blue, 10%);
    }
  }
  &.Diamond-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,&:focus{
      background: darken(white, 5%);;
    }
  }
  &.Diamond-size-big{
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.Diamond-size-small{
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.Diamond-theme-button {
    &.Diamond-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.Diamond-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.Diamond-theme-link {
    &.Diamond-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.Diamond-theme-text {
    &.Diamond-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.Diamond-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.Diamond-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.Diamond-theme-link, &.Diamond-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
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
