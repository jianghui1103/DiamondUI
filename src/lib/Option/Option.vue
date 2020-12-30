<template>
<li 
class="Diamond-select-dropdown__item"
@mouseenter="enter" @mouseleave="leave"
:class="{
    hover: hover && !disable,
    'is-disabled': disable,
    'is-selected': itemSelected
}"
v-show="visible"
@click.stop="!disable && $parent.$parent.handlOptionClick(this)"
>
    <slot>
        <span>{{ label }}</span>
        <p>{{itemSelected}}</p>
    </slot>
</li>
</template>

<script lang="ts">
import { reactive, toRefs, computed, inject } from 'vue'
export default {
    props: {
        value: {
            required: true
        },
        label: [String, Number],
        created: Boolean,
        disable: Boolean
    },
    setup(props,context) {
        const data = reactive({
            hover: false,
            selected: false,
        })
        const select = inject('select')
        const enter = ()=> {
            data.hover = true;
        }
        const leave = ()=> {
            data.hover = false;
        }
        const visible = computed(()=> {
            if(!select.filterable) return true;
            if(props.label.match(select.filterValue) !== null) return true
        })
        const itemSelected = computed(() => {
            if(!select.multiple) {
                return  select.selectValue === props.label
            } else {
                return select.selectValue.indexOf(props.label) > -1
            }   
        })

        return {
            ...toRefs(data),
            enter,
            leave,
            itemSelected,
            visible
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
    &.is-disabled{
        color: #C0C4CC;
        cursor: not-allowed;
    }
    &.is-selected {
        color: #409eff;
        background-color: #fff;
    }
}
</style>