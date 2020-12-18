<template>
<div class="Diamond-input-number">
    <span class="Diamond-input-number__increase" @click="handleIncrease">
        +
    </span>
    <span class="Diamond-input-number__decrease" @click="handleDecrease">
        -
    </span>
    <DInput v-model:modelValue="inputValue" @input="handleChange" placeholder="密码框" />
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

    },
    setup(props,context) {
        const { modelValue } = props;
        let inputValue = ref(1)
        inputValue.value = modelValue

        const handleChange = (event)=> {
            console.log('evenet target value',event.target.value)
            context.emit('change',event.target.value)
        }
        const handleIncrease = ()=> {
            inputValue.value += 1
        }
        const handleDecrease = ()=> {
            inputValue.value -= 1
        }

        return {
            inputValue,handleChange,handleIncrease,handleDecrease
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