<template>
<div class="Diamond-tabs">
    <div class="Diamond-tabs-nav">
        <div :class="{selected: t===selected}" class="Diamond-tabs-nav-item" v-for="(t,index) in title" @click="checkSelected(t)" :key="index">{{t}}</div>
    </div>
    <div class="Diamond-tabs-content">
        <component class="Diamond-tabs-content-item" :is="current" :key="current.props.title" />
    </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
    props: {
        selected: {
            type: String,
        }
    },
    setup(props, context) {
        const defaults = context.slots.default()
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('节点类型错误')
            }
        })
        const title = defaults.map((tag) => {
            return tag.props.title
        })
        const current = defaults.filter((tag) => {
            console.log(tag.props.title === props.selected)
            return tag.props.title === props.selected
        })[0]

        const checkSelected = (t) => {
            context.emit('update:selected', t)
        }

        return {
            defaults,
            title,
            current,
            checkSelected
        }
    },
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.Diamond-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
