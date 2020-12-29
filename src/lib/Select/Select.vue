<template>
    <div class="Diamond-select">
        <Diamond-input :class="{'is-multipe': multiple}" @blur="handleBlur" v-model:modelValue="selectValue" :clearable="clearable" readonly :placeholder="multiple && selectValue.length > 0 ? null : '请选择'" @click="toggle" ref="inputEle">
        </Diamond-input>
        <div class="Diamond-select-tags-container">
            <div class="Diamond-select__tags" ref="tags" v-if="multiple" >
                <span>
                    <span class="Diamond-tag--info" v-for="(item,index) in selectValue" :key="index">
                        <span class="Diamond-select__tags-text">{{item}}</span>
                        <img src="../../icons/clear.svg" alt="" srcset="" class="icons">
                    </span>
                </span>
            </div>
        </div>
        <diamond-select-dropdown :width="width" ref="dropdown" v-show="dropdownShow">
            <slot/>
        </diamond-select-dropdown>
    </div>
</template>

<script lang="ts">  
import {ref, onMounted, watchEffect, nextTick} from 'vue'
import DiamondInput from '../Input/Input.vue'
import DiamondSelectDropdown from './SelectDropdown.vue'
export default {
    components: {
        DiamondInput,DiamondSelectDropdown
    },
    provide() {
        return {
            select: this
        }
    },
    props: {
        modelValue:[ String || Number || Array],
        clearable: Boolean,
        multiple: Boolean
    },
    setup(props,context) {
        const { modelValue,multiple } = props
        const selectValue = ref(modelValue)
        console.log(selectValue.value)
        const dropdown = ref < HTMLDivElement > (null);
        const inputEle = ref < HTMLDivElement > (null);
        const tags = ref < HTMLDivElement > (null);
        const dropdownShow = ref <Boolean> (false);

        const toggle = ()=> {
            dropdownShow.value = !dropdownShow.value
        }
        const handlOptionClick= (e)=> {
            if(multiple) {
                let index = selectValue.value.indexOf(e.label);
                index > -1 ? selectValue.value.splice(index,1) : selectValue.value.push(e.label)
            } else {
                console.log(e.label)
                selectValue.value = e.label;
            }
            context.emit('update:modelValue',selectValue.value)
            context.emit('change',selectValue.value)
        }
        const handleBlur = (value)=> {
            setTimeout(()=> {
                dropdownShow.value = false;
            },200)
        }
        onMounted(()=>{
            watchEffect(()=>{
                const { width,top,left,height } = inputEle.value.$el.getBoundingClientRect();
                dropdown.value.$el.style.minWidth = width + 'px';
                dropdown.value.$el.style.top = top + height + 'px';
                dropdown.value.$el.style.left = left + 'px';
                // if(tags.value) {
                //     tags.value.style.minWidth = width - 20 + 'px';
                // }
                // if(props.multiple) {
                //     const { height } = tags.value.getBoundingClientRect();
                //     inputEle.value.$el.children[0].style.height = height + 'px';
                //     console.log(inputEle.value.$el.children[0])
                //     console.log(height,'gaodu')
                // }
            })
        })
        return {
            selectValue,
            dropdown,inputEle,
            dropdownShow,
            toggle,
            handlOptionClick,
            tags,
            handleBlur
        }
    },
    
}
</script>

<style lang="scss" >
.Diamond-select-tags-container{
    position: relative;
}
.Diamond-select{
    width: 140px;
    display: inline-block;
    & ::v-deep .Diamond-input__inner{
        cursor: pointer;
    }
    & .Diamond-select__tags{
        position: absolute;
        line-height: normal;
        white-space: normal;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        &>span{
            display: block;
            & .Diamond-tag--info{
                box-sizing: border-box;
                border-color: transparent;
                margin: 2px 0 2px 6px;
                background-color: #f4f4f5;
                border-color: #e9e9eb;
                color: #909399;
                height: 24px;
                padding: 0 8px;
                line-height: 22px;
                border-width: 1px;
                border-style: solid;
                border-radius: 4px;
                white-space: nowrap;
                display: inline-block;
                img{
                    position: relative;
                    cursor: pointer;
                    vertical-align: middle;
                    height: 16px;
                    transform: scale(.8);
                    right: -7px;
                    top: 0;
                }
            }
        }
    }
}
</style>