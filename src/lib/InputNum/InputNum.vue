<template>
<div class="Diamond-input-number">
    <span class="Diamond-input-number__increase" :class="[{'is-disabled': max <= inputValue || disabled }]" @click="handleIncrease">
        +
    </span>
    <span class="Diamond-input-number__decrease" :class="[{'is-disabled': min >= inputValue || disabled }]"  @click="handleDecrease">
        -
    </span>
    <DInput v-model:modelValue="inputValue" :disabled="disabled" placeholder="密码框" />
</div>
</template>

<script lang="ts">
import DInput from '../Input/Input.vue'
import { ref, nextTick, Ref, unref } from 'vue'
export default {
    components: {
        DInput
    },
    props: {
        modelValue:{
            type: Number,
            default:1
        },
        min: Number,
        max: Number,
        step: {
            type: Number,
            default: 1
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props,context) {
        const { modelValue,min,max,step,disabled } = props;
        let inputValue = ref(1)
        inputValue.value = modelValue
        const handleIncrease = ()=> {
            if(max <= inputValue.value || disabled ) {
                return false;
            }
            inputValue.value += step
            context.emit('change',inputValue.value)
        }
        const handleDecrease = ()=> {
            if(min >= inputValue.value || disabled ) {
                return false;
            }
            inputValue.value -= step
            context.emit('change',inputValue.value)
        }

        return {
            inputValue,handleIncrease,handleDecrease
        }
    }
}
</script>

<style lang="scss">
.Diamond-input{
    width: 100%; 
    .Diamond-input__inner{
        text-align:center
    }
}
.Diamond-input-number {
    position: relative;
    display: inline-block;
    width: 180px;
    line-height: 38px;
}
.Diamond-input-number__increase, .Diamond-input-number__decrease{
    &.is-disabled{
        color: #C0C4CC;
        cursor: not-allowed;
    }
    position: absolute;
    z-index: 1;
    top: 1px;
    width: 40px;
    height: auto;
    text-align: center;
    background: #F5F7FA;
    color: #606266;
    cursor: pointer;
    font-size: 13px;
}
.Diamond-input-number__increase {
    right: 1px;
    border-radius: 0 4px 4px 0;
    border-left: 1px solid #DCDFE6;
}
.Diamond-input-number__decrease {
    left: 1px;
    border-radius:4px 0 0 4px ;
    border-right: 1px solid #DCDFE6;
}
</style>