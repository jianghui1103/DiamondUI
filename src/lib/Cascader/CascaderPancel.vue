<template>
    <CascaderMenu v-for="(node,index) in nodeList" :key="index" :options="node" @update:changeNode="addCascaderMenu"/>
</template>

<script lang="ts">
import { ref } from 'vue'
import CascaderMenu from './CascaderMenu.vue'
export default {
    components: {
        CascaderMenu
    },
    props: {
        options: Object
    },
    setup(props,context){
        setNodeLevel(props.options,0)
        const nodeList = ref([]);
        nodeList.value[0] = arrForEach(props.options)
        const addCascaderMenu = (item)=> {
            if(!item.children) {
                context.emit('change',item)
                return false;
            }
            for(let i=nodeList.value.length-1;i>item.level;i--) {
                nodeList.value.splice(i,1)
            }
            nodeList.value[item.level+1] = arrForEach(item.children)
        }
        return {
            nodeList,
            addCascaderMenu
        }

    }
}
function setNodeLevel(menu,level) {
    menu.forEach(node=>{
        node.level = level
        if(node.children) {
            setNodeLevel(node.children,level+1)
        }else{
            return false;
        }
    })
}
function arrForEach(arr){
    let newArr = []
    arr.forEach(element => {
        newArr.push(element)
    });
    return newArr;
}
</script>