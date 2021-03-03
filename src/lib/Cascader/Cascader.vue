<template>
<div 
    class="Diamond-cascader"
>
    <DInput 
        :disabled="true" 
        :readonly="true"
        placeholder="请选择"
        v-model:modelValue="cascaderValue.label"
        @click="toggleDropDownVisible"
    ></DInput>
    <transition name="Diamond-zoom-in-top">
        <div class="Diamond-cascader-panel">
            <div
                v-show="dropDownVisible"
                ref="popper"
                :class="['Diamond-cascader__dropdown', popperClass]"
            >
                <CascaderPancel :options="options" @change="change"/>
            </div>
        </div>

    </transition>
</div>
</template>

<script lang="ts">
import DInput from '../Input/Input.vue'
import CascaderPancel from './CascaderPancel.vue'
import { ref,createApp,onUnmounted, reactive } from 'vue'
export default {
    components: { DInput,CascaderPancel},
    props: {
        options: Object
    },

    setup(props,context){
        const dropDownVisible = ref(false);
        const cascaderValue = reactive({value: '', label: ''});
        const popper = ref(null)
        const toggleDropDownVisible = ()=> {
            dropDownVisible.value = !dropDownVisible.value
        }
        const change = (value)=> {
            cascaderValue.value = value.value
            cascaderValue.label = value.label
            context.emit('change',cascaderValue)
            context.emit('update:value',cascaderValue)
        }
        const resetCascaderValue = ()=>{
            change({value: '', label: '请选择'})
        }
        resetCascaderValue()
        return {
            popper,
            dropDownVisible,
            cascaderValue,
            toggleDropDownVisible,
            change
        }
    }
}
</script>

<style lang="scss" scoped>
.Diamond-cascader{
    &_panel{
        position: relative;
    }
    &__dropdown{
        position: absolute;
        margin: 5px 0;
        font-size: 14px;
        background: #fff;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        margin-top: 12px;
        display: flex;
        font-size: 14px;
    }
    &-menu{
        min-width: 180px;
        box-sizing: border-box;
        color: #606266;
        border-right: 1px solid #e4e7ed;
        &-wrapper{
            position: relative;
            min-height: 100%;
            margin: 0;
            padding: 6px 0;
            list-style: none;
            box-sizing: border-box;
        }
        &-node{
            position: relative;
            display: flex;
            align-items: center;
            padding: 0 20px 0 20px;
            height: 34px;
            line-height: 34px;
            outline: 0;
            &_label{
                flex: 1;
                padding: 0 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
            }
            &.in-active-path{
                color: #409eff;
                font-weight: 700;
            }
        }
        &-node:hover{
            background-color: #f5f5f5;
        }
    }
}
</style>