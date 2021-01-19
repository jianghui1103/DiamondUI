    <template>
    <label class="Diamond-checkbox" role="checkbox" :class="{'is-checked':checkboxValue,'is-disabled':isDisabled}" >
        <span class="Diamond-checkbox__input" :class="{'is-checked':checkboxValue,'is-disabled':isDisabled}" role="false" >
            <span class="Diamond-checkbox__inner"></span>
            <input class="Diamond-checkbox__original" type="checkbox" v-model="checkboxValue" @change.stop="handleClick" />
        </span>
        <span class="Diamond-checkbox__label">
            <template v-if="!$slots.default">{{ label }}</template>
            <slot />
        </span>
    </label>
</template>

<script lang="ts">
import { computed,nextTick, getCurrentInstance } from 'vue'
export default {
    props: {
        modelValue: Boolean,
        label: String || Number || Boolean,
        disabled: {
            type:Boolean,
            default: false
        },
    },
    setup(props,context) {
        const { checkboxGroup } = useCheckGroup();
        const checkboxValue = computed(()=>{
            if(checkboxGroup) {
                return checkboxGroup.ctx.modelValue.includes(props.label)
            }else {
                return props.modelValue
            }
        });

        const isDisabled = computed(()=> {
            if(props.disabled) return true;
            if(checkboxGroup) {
                return (
                    isDisabledFn()
                )
            }
        })
        // 限定长度，使复选框是否可以选择
        const isDisabledFn = ()=>{
            return (
                (checkboxGroup.ctx.min >= checkboxGroup.ctx.modelValue.length && checkboxGroup.ctx.modelValue.indexOf(props.label) !== -1) || 
                (checkboxGroup.ctx.max <= checkboxGroup.ctx.modelValue.length && checkboxGroup.ctx.modelValue.indexOf(props.label) === -1)
            )
        }
        
        const handleClick = async ()=>{
            await nextTick()
            if(props.disabled || isDisabledFn()) return false;
            let modelValue = null;
            if(checkboxGroup) {
                modelValue = checkboxGroup.ctx.modelValue;
                modelValue.includes(props.label) ?  modelValue.splice(modelValue.indexOf(props.label),1) : modelValue.push(props.label);
            } else {
                modelValue = !checkboxValue.value
            }
            context.emit('change',modelValue);
            context.emit('update:modelValue',modelValue);    
            
        }
        return {
            checkboxValue,
            handleClick,
            isDisabled
        }
    }
}
function useCheckGroup() {
    let { parent } = getCurrentInstance();
    if(parent && parent.type.name === 'checkboxGroup') return { checkboxGroup: parent }
    return {
        checkboxGroup: null
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
    &.is-checked.is-disabled .Diamond-checkbox__inner{
        background-color: rgb(242, 246, 252);
        border-color: rgb(220, 223, 230);
        &::after{
            border-color: rgb(192, 196, 204);
        }
    }
    &.is-checked + .Diamond-checkbox__label {
        color: #409EFF;
    }
    &.is-disabled .Diamond-checkbox__inner {
        border-color: #E4E7ED;
        cursor: not-allowed;
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