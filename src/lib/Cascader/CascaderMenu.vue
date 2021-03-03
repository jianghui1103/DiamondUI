<template>
    <div class="Diamond-cascader-menu">
        <ul class="Diamond-cascader-menu-wrapper">
            <li class="Diamond-cascader-menu-node" :class="{disabled: item.disabled}" v-for="(item,index) in options" :key="index" @click="handleClick(item)">
                <span class="Diamond-cascader-menu-node_label">{{item.label}}</span>
                <svg class="icon">
                    <use xlink:href="#icon-xiangzuo"></use>
                </svg>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { inject } from 'vue'
export default {
    props: {
        options: Object
    },
    setup(props,{emit}){
        const handleClick = (item)=>{
            if(item.disabled) return false;
            emit('update:changeNode', item);
        }
        return {
            handleClick
        }
    },
}

</script>

<style lang="scss" scoped>
.Diamond-cascader{
    &_panel{
        position: relative;
    }
    &__dropdown{
        position: absolute;
        margin: 5px 0;
        font-size: 14px;
        background: #fff;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        margin-top: 12px;
        display: flex;
        font-size: 14px;
    }
    &-menu{
        min-width: 180px;
        box-sizing: border-box;
        color: #606266;
        border-right: 1px solid #e4e7ed;
        &-wrapper{
            position: relative;
            min-height: 100%;
            margin: 0;
            padding: 6px 0;
            list-style: none;
            box-sizing: border-box;
        }
        &-node{
            position: relative;
            display: flex;
            align-items: center;
            padding: 0 20px 0 20px;
            height: 34px;
            line-height: 34px;
            outline: 0;
            &_label{
                flex: 1;
                padding: 0 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
            }
            &.in-active-path{
                color: #409eff;
                font-weight: 700;
            }
        }
        &-node:hover{
            background-color: #f5f5f5;
        }
        &-node.disabled{
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}
</style>
