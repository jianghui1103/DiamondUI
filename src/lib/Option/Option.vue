<template>
<li 
class="Diamond-select-dropdown__item"
@mouseenter="enter" @mouseleave="leave"
:class="{
    hover: hover
}"
@click.stop="$parent.$parent.handlOptionClick(this)"
>
    <slot>
        <span>{{ label }}</span>
    </slot>
</li>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
export default {
    props: {
        value: {
            required: true
        },
        label: [String, Number],
        created: Boolean,
    },
    setup(props,context) {
        const data = reactive({
            hover: false
        })
        const enter = ()=> {
            data.hover = true;
        }
        const leave = ()=> {
            data.hover = false;
        }
        return {
            ...toRefs(data),
            enter,
            leave
        }
    }

}

</script>

<style lang="scss">
.Diamond-select-dropdown__item {
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
    &.hover{
        background: #F5F7FA;
    }
}
</style>