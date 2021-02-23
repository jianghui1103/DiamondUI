<template>
<div 
    class="Diamond-cascader"
>
    <DInput 
        disabled="true" 
        readonly="true"
        placeholder="请选择"
        :value="cascaderValue"
        @click="toggleDropDownVisible"
    ></DInput>
    <transition name="Diamond-zoom-in-top">
        <div
            v-show="dropDownVisible"
            ref="popper"
            :class="['Diamond-cascader__dropdown', popperClass]"
        >
            <div class="el-cascader-menu">
                <ul class="el-cascader-menu-wrapper">
                    <li>
                        <span>指南</span>
                        <svg class="icon">
                            <use xlink:href="#icon-xiangzuo"></use>
                        </svg>
                    </li>
                </ul>
            </div>
            
        
        </div>

    </transition>
</div>
</template>

<script lang="ts">
import DInput from '../Input/Input.vue'
import { ref } from 'vue'
export default {
    components: { DInput },
    setup(){
        const dropDownVisible = ref(true);
        const cascaderValue = ref(null);

        const toggleDropDownVisible = ()=> {
            dropDownVisible.value = !dropDownVisible.value
        }
        return {
            dropDownVisible,
            cascaderValue,
            toggleDropDownVisible
        }
    }
}
</script>

<style lang="scss" scoped>
.Diamond-cascader__dropdown{
    margin: 5px 0;
    font-size: 14px;
    background: #fff;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    margin-top: 12px;
}
</style>