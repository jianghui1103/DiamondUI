<template>
    <div class="Diamond-select">
        <Diamond-input v-model:modelValue="selectValue" readonly placeholder="请选择" @click="toggle" ref="inputEle">
        </Diamond-input>
        <diamond-select-dropdown :width="width" ref="dropdown" v-show="dropdownShow">
            <slot/>
        </diamond-select-dropdown>
    </div>
</template>

<script lang="ts">
import {ref, onMounted, watchEffect} from 'vue'
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
        modelValue:[ String || Number]
    },
    setup(props,context) {
        const { modelValue } = props
        const selectValue = ref(modelValue)
        const dropdown = ref < HTMLDivElement > (null);
        const inputEle = ref < HTMLDivElement > (null);
        const dropdownShow = ref <Boolean> (false)

        const toggle = ()=> {
            dropdownShow.value = !dropdownShow.value
        }
        const handlOptionClick= (e)=> {
            dropdownShow.value = false;
            selectValue.value = e.label;
            context.emit('update:modelValue',e.value)
            context.emit('change',e.value)
        }
        onMounted(()=>{
            watchEffect(()=>{
                const { width,top,left,height } = inputEle.value.$el.getBoundingClientRect();
                dropdown.value.$el.style.minWidth = width + 'px';
                dropdown.value.$el.style.top = top + height + 'px';
                dropdown.value.$el.style.left = left + 'px';
            })
        })
        
        return {
            selectValue,dropdown,inputEle,dropdownShow,toggle,handlOptionClick
        }
    },
    
}
</script>

<style lang="scss" scoped>
.Diamond-select{
    width: 140px;
    display: inline-block;
}
</style>