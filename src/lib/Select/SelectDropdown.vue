<template>
    <div class="Diamond-select-drop"
    >
        <div class="popper__arrow"></div>
        <ul class="Diamond-select-dropdown__list">
            <slot />
        </ul>
    </div>
</template>
<script lang="ts">
import { inject, nextTick, ref, watch } from 'vue'
export default {
    setup() {
        const select = inject('select')
        return {
        }
    }
}

function useMinWidth(select) {
    const minWidth = ref('');
    watch(
        ()=>{console.log(select.inputWidth)},
        ()=>{
            minWidth.value = select.$el.getBoundingClientRect().width
        }
    )
    return minWidth
}
</script>

<style lang="scss">
.Diamond-select-drop{
    position: absolute;
    z-index: 1001;
    border: solid 1px #E4E7ED;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin: 5px 0;
    transform-origin: center top;
    .Diamond-select-dropdown__list {
        list-style: none;
        padding: 6px 0;
        margin: 0;
        box-sizing: border-box;
    }
    
}
.popper__arrow {
        position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
        top: -6px;
        left: 50%;
        margin-right: 3px;
        border-top-width: 0;
        border-bottom-color: #EBEEF5;
        
    }
    .popper__arrow:after {
        top: 1px;
            margin-left: -6px;
            border-top-width: 0;
            border-bottom-color: #FFFFFF;
    }
</style>