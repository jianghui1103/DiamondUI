<template>
<div class="Diamond-slider" ref="slider">
    <div class="Diamond-slider__runwary" :class="{disabled}">
        <div class="Diamond-slider__bar" :style="{'width':sliderWidth}">
        </div>
        <div class="Diamond-slider__button-wrapper" :style="{'left':sliderLeft}">
            <div class="Diamond-slider__button"
            ref="sliderButton" 
            @mouseenter="isHover = true"
            @mouseleave="isHover = false"
                >
            </div>
            <div class="tips" v-show="isHover">
                <span>{{modelValue}}</span>
                <div class="popper__arrow">
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script lang="ts">
import { computed, ref, onMounted } from 'vue'
export default {
    props: {
        modelValue: Number,
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        disabled: {
            type: Boolean,
            default: false
        },
        step: {
            type: Number,
            default: 1
        }
    },
    setup(props,context){
        const isHover = ref(false);
        const sliderButton = ref(null);
        const slider = ref(null);
        // 监听点击 移动 移开动作
        onMounted(()=>{
            if(props.disabled) return false;
            sliderButton.value.onmouseenter = function(e) {
                isHover.value = true;
            }
            sliderButton.value.onmouseleave = function(e) {
                isHover.value = false;
            }
            sliderButton.value.onmousedown = function(e){
                let width = parseInt(sliderWidth.value);
                let disX = e.clientX;
                
                document.onmousemove = function(e) {
                    // value, left, width
                    // 当value变化的时候，会通过计算属性修改left，width
                    // 拖拽的时候获取的新width
                    let newWidth = e.clientX - disX + width;
                    let scale = newWidth / slider.value.offsetWidth;
                    let value = Math.ceil((props.max-props.min) * scale + props.min);
                    value = Math.min(value,props.max)
                    value = Math.max(value,props.min)
                    value = Math.round(value/props.step) * props.step
                    context.emit('update:modelValue', value)
                }
                document.onmouseup = function(e) {
                    document.onmousemove = document.onmouseup = null;
                }
                return false;
            }
        })

        // 设置一个百分比，提供计算slider进度宽度和trunk的left值
        // 对应公式为  当前值-最小值/最大值-最小值 = slider进度width / slider总width
        // trunk left =  slider进度width + trunk宽度/2
        const scale = computed(()=>{
            return (props.modelValue - props.min)/(props.max-props.min);
        })
        const sliderWidth = computed(()=>{
            if(slider.value) {
                return slider.value.offsetWidth * scale.value + 'px';
            }else {
                return '0px'
            }
        })

        const sliderLeft = computed(()=>{
            if(slider.value) {
                return slider.value.offsetWidth * scale.value + 'px';
            }else{
                return '0px'
            }
        })

        return {
            sliderButton,
            slider,
            sliderWidth,
            sliderLeft,
            isHover
        }
    }
}
</script>


<style lang="scss" scoped>
$h: 6px;
.Diamond-slider{
    &__runwary{
        width: 100%;
        height: 6px;
        margin: 16px 0;
        background-color: #e4e7ed;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        // visibility: hidden;
        &.disabled{
            cursor: default;
            & .Diamond-slider{
                &__bar{
                    background-color: #c0c4cc;
                }
                &__button {
                    cursor:not-allowed;
                    transform: scale(1);
                    border-color: #c0c4cc;
                }
            }

 
        }
    }
    &__bar {
        height: 6px;
        background-color: #409eff;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        position: absolute;
    }
    &__button{
        width: 16px;
        height: 16px;
        border: 2px solid #409eff;
        border-radius: 50%;
        transition: .2s;
        user-select: none;
        background-color: #fff;
        &:hover{
            transform: scale(1.2);
            cursor: grab;
        }

        &-wrapper{
            width: 36px;
            height: 36px;
            z-index: 1001;
            top: -15px;
            transform: translateX(-50%);
            background-color: transparent;
            position: absolute;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
            &::after{
                display: inline-block;
                vertical-align: middle;
                content: '';
                height: 100%;
            }
            & .tips{
                position: absolute;
                background: #303133;
                padding: 10px;
                border-radius: 4px;
                font-size: 12px;
                line-height: 1.2;
                min-width: 10px;
                color: #fff;
                bottom: 35px;
                    .popper__arrow,
                    .popper__arrow::after {
                        position: absolute;
                        display: block;
                        width: 0;
                        height: 0;
                        border-color: transparent;
                        border-style: solid;
                    }
            }
            
        }
    }
}
</style>