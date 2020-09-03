<template>
    <div>
        <h3>样式</h3>
        <Button >nihao</Button>
        <Button theme="button">nihao</Button>
        <Button theme="link">nihao</Button>
        <Button theme="text">nihao</Button>
    </div>
    <div>
        <h3>大小</h3>
        <Button >nihao</Button>
        <Button size="big">nihao</Button>
        <Button size="small">nihao</Button>
    </div>
    <h1>示例3</h1>
    <div>
        <dir>
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
        </dir>
        <dir>
        <Button theme="link" level="main">主要链接按钮</Button>
        <Button theme="link">普通链接按钮</Button>
        <Button theme="link" level="danger">危险链接按钮</Button>
        </dir>
        <dir>
        <Button theme="text" level="main">主要文字按钮</Button>
        <Button theme="text">普通文字按钮</Button>
        <Button theme="text" level="danger">危险文字按钮</Button>
        </dir>
    </div>
    <h1>示例4</h1>
    <div>
        <Button disabled >普通文字按钮</Button>
    </div>
    <h1>示例5</h1>
    <div>
        <Button loading >加载中</Button>
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
    components: { Button },
    setup() {
        const onClick = ()=> {
            console.log('hi');
        }
        return {onClick}
    }
}
</script>
