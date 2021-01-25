<template>
<div class="Diamond-slider">
    <div class="Diamond-slider__runwary">
        <div class="Diamond-slider__bar">
        </div>
        <div class="Diamond-slider__button-wrapper">
            <div class="Diamond-slider__button"  
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                @mousedown="onButtonDown"
                @touchstart.passive="onButtonDown"
                @keydown.down.prevent="onLeftKeyDown"
                @keydown.up.prevent="onRightKeyDown"
                >
            </div>
        </div>
    </div>
</div>
</template>


<script lang="ts">
import { computed, ref } from 'vue'
export default {
    props: {
        value: Number
    },
    setup(){
        const hovers = ref(false);

        const sliderRunwaryLeft = computed(()=> {

        })

        const onClickSlider = ()=> {

        } 

        return {
            onClickSlider
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
        }
    }
}
</style>