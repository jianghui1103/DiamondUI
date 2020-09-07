<template>
<div>
    Tabs 实例
</div>
<h1>实例1</h1>
<Tabs>
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
    components: {
        Tabs,
        Tab
    }
}
</script>
