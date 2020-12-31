<template>
    <label class="Diamond-checkbox" role="checkbox" :class="{'is-checked':checkboxValue}" >
        <span class="Diamond-checkbox__input" :class="{'is-checked':checkboxValue}" role="false" >
            <span class="Diamond-checkbox__inner"></span>
            <input class="Diamond-checkbox__original" type="checkbox" v-model="checkboxValue" @change.stop="handleClick" />
        </span>
        <span class="Diamond-checkbox__label">
            <slot />
        </span>
    </label>
</template>

<script lang="ts">
import { computed,nextTick } from 'vue'
export default {
    props: {
        modelValue: Boolean,
    },
    setup(props,context) {
        const checkboxValue = computed(()=>{
            return props.modelValue
        });
        const handleClick = async ()=>{
            await nextTick()
            context.emit('change',!checkboxValue.value);
            context.emit('update:modelValue',!checkboxValue.value);    
        }
        return {
            checkboxValue,
            handleClick
        }
    }
}
</script>

<style lang="scss">
.Diamond-checkbox, .Diamond-checkbox__input {
    display: inline-block;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
}
.Diamond-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 30px;
    .Diamond-checkbox__inner::after {
        content: '';
        box-sizing: content-box;
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in 50ms;
        transform-origin: center;
    }
    .Diamond-checkbox__input.is-checked .Diamond-checkbox__inner::after {
        transform: rotate(45deg) scaleY(1);
    }
}
.Diamond-checkbox__input {
    &.is-checked .Diamond-checkbox__inner {
        border-color: #409EFF;
        background: #409EFF;
        &::after{
            transform: rotate(45deg) scaleY(1);
        }
    }
    &.is-checked + .Diamond-checkbox__label {
        color: #409EFF;
    }
    &.is-disabled .Diamond-checkbox__inner {
        border-color: #E4E7ED;
        background: #F5F7FA;
    }
    &.is-disabled + .Diamond-checkbox__label {
        color: #C0C4CC;
        cursor: not-allowed;
    }
    outline: 0;
    line-height: 1;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
}
.Diamond-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
}
.Diamond-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
}
.Diamond-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
    
}

</style>