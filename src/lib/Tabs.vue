<template>
<div class="Diamond-tabs">
    <div class="Diamond-tabs-nav" ref="container">
        <div :class="{selected: t===selected}" class="Diamond-tabs-nav-item" v-for="(t,index) in title" @click="checkSelected(t)" :key="index" :ref="el => {if(el) navItems[index]=el}">{{t}}</div>
        <div class="Diamond-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="Diamond-tabs-content">
        <component class="Diamond-tabs-content-item" v-for="(c,index) in defaults" :key="index" :is="c" :class="{selected: c.props.title === selected}" />
    </div>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {
    ref
} from 'vue';
import {
    onMounted
} from 'vue';
import {
    onUpdated
} from 'vue';
export default {
    props: {
        selected: {
            type: String,
        }
    },
    setup(props, context) {
        const navItems = ref < HTMLDivElement[] > ([])
        const indicator = ref < HTMLDivElement > (null)
        const container = ref < HTMLDivElement > (null)
        const changeIndicator = () => {
            const divs = navItems.value
            const result = divs.filter(div => div.classList.contains('selected'))[0]
            const {
                width
            } = result.getBoundingClientRect()
            indicator.value.style.width = width + 'px'
            const {
                left: left1
            } = container.value.getBoundingClientRect()
            const {
                left: left2
            } = result.getBoundingClientRect()
            const left = left2 - left1
            indicator.value.style.left = left + 'px'
        }
        onMounted(changeIndicator)
        onUpdated(changeIndicator)
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
            return tag.props.title === props.selected
        })[0]
        const checkSelected = (t) => {
            context.emit('update:selected', t)
        }
        return {
            defaults,
            title,
            current,
            checkSelected,
            navItems,
            indicator,
            container
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
        position: relative;

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

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }

    &-content {
        padding: 8px 0;

        &-item {
            display: none;

            &.selected {
                display: block;
            }
        }
    }
}
</style>
