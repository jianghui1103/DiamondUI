<template>
    <label class="Diamond-radio" role="radio" :class="{'is-checked': radioVlue === label,'is-disabled':disabled}">
        <span class="Diamond-radio__input" :class="{'is-checked': radioVlue === label,'is-disabled':disabled}" >
            <span class="Diamond-radio__inner"></span>
            <input class="Diamond-radio__original" type="radio" :disabled="disabled" :value="label" v-model="radioVlue"  @change.stop="updataInp(label)">
        </span>
        <span class="Diamond-radio__label">
            <slot />    
        </span>
    </label>
</template>

<script lang="ts">
import { computed, nextTick, ref, getCurrentInstance } from 'vue'
export default {
    props: {
        value: String || Number || Boolean,
        label: String || Number || Boolean,
        disabled: {
            type:Boolean,
            default: false
        },
    },
    setup(props,context) {
        const { value,label } = props;
        const { radioGroup } = useCheckGroup()

        const radioVlue = computed(()=>{
            if(radioGroup) {
                return radioGroup.ctx.value
            } else {
                return props.value
            }
        })
        const updataInp = async (lable)=>{
            await nextTick()
            context.emit('change',lable)
            context.emit('update:value', lable) // 触发父元素的input 事件 
            if(radioGroup){
                radioGroup.emit('change',lable)
                radioGroup.emit('update:value',lable)
            }
        }
        return {
            updataInp,
            radioVlue,
        }
    },  
}

function useCheckGroup() {  
    let { parent } = getCurrentInstance()
    while(parent) {
        if(parent.type.name !== 'RadioGroup') {
            parent = parent.parent
        } else {
            return {
                radioGroup: parent
            }
        }
    }
    return {
        radioGroup: null
    }
}
</script>
<style lang="scss">
.Diamond-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .Diamond-radio__inner::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #FFFFFF;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
    }
    .Diamond-radio__input.is-checked .Diamond-radio__inner::after {
        transform: translate(-50%, -50%) scale(1);
    }
}
.Diamond-radio__input {
    &.is-checked .Diamond-radio__inner {
        border-color: #409EFF;
        background: #409EFF;
    }
    &.is-checked + .Diamond-radio__label {
        color: #409EFF;
    }
    &.is-disabled .Diamond-radio__inner {
        border-color: #E4E7ED;
        background: #F5F7FA;
    }
    &.is-disabled + .Diamond-radio__label {
        color: #C0C4CC;
        cursor: not-allowed;
    }
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
}
.Diamond-radio__original {
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
.Diamond-radio__label {
    font-size: 14px;
    padding-left: 10px;
}
.Diamond-radio__inner {
    border: 1px solid #DCDFE6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #FFFFFF;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
}
</style>