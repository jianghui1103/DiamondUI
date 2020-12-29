<template>
    <div class="Diamond-select">
        <Diamond-input 
        :class="{'is-multipe': multiple}" 
        @blur="handleBlur" 
        v-model:modelValue="selectValue" 
        :clearable="clearable" 
        :placeholder="multiple && selectValue.length > 0 ? null : '请选择'" 
        readonly 
        @click="toggle" 
        ref="inputEle"
        >
        </Diamond-input>
            <div class="Diamond-select__tags" ref="tags" v-if="multiple" @click="toggle">
                <span>
                    <span class="Diamond-tag--info" v-for="(item,index) in selectValue" :key="index">
                        <span class="Diamond-select__tags-text">{{item}}</span>
                        <img src="../../icons/clear.svg" alt="" srcset="" class="icons" @click.stop="deleteTags(index)">
                    </span>
                </span>
            </div>
        <diamond-select-dropdown :width="width" ref="dropdown" v-show="dropdownShow">
            <slot/>
        </diamond-select-dropdown>
    </div>
</template>

<script lang="ts">  
import {ref, onMounted, watchEffect, nextTick, watch} from 'vue'
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
        // 删除选择节点
        const deleteTags = (index)=> {
            selectValue.value.splice(index,1);
        }
        const setTagHeight = ()=> {
            if(multiple) {
                nextTick(()=> {
                    const { height } = tags.value.getBoundingClientRect();
                    inputEle.value.$el.children[0].style.height = height > 40 ? height + 'px' : '40px';
                    dropdown.value.$el.style.top = inputEle.value.$el.children[0].style.height;
                })
            }
        }
        onMounted(()=>{
            watchEffect(()=>{
                const { width,top,left,height } = inputEle.value.$el.getBoundingClientRect();
                // const srcollTop = document.body.scrollTop || document.documentElement.scrollTop;
                dropdown.value.$el.style.minWidth = width + 'px';
                dropdown.value.$el.style.top = height + 'px';
                if(tags.value) {
                    tags.value.style.minWidth = width - 20 + 'px';
                }
            })
        })
        return {
            selectValue,
            dropdown,inputEle,
            dropdownShow,
            toggle,
            handlOptionClick,
            tags,
            handleBlur,
            setTagHeight,
            deleteTags
        }
    },
    watch:{
        modelValue: {
    　　　　handler(newValue, oldValue) {
                this.setTagHeight()
            console.log(newValue)
    　　　　},
    　　　　deep: true
    　　}

    }
}
</script>

<style lang="scss" >
.Diamond-select-tags-container{
    position: relative;
}
.Diamond-select{
    width: 140px;
    display: inline-block;
    position: relative;
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