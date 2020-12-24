<template>
<div>
    <li 
    class="Diamond-select-dropdown__item hover"
    :class="{
        hover: hover
    }"
    @click.stop="$parent.$parent.handlOptionClick(this)"
    >
        <slot>
            <span>{{ label }}</span>
        </slot>
    </li>
</div>
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
        return {
            ...toRefs(data)
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
}
</style>