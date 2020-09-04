<template>
    <div class="Diamond-dialog-overlay"></div>
    <div class="Diamond-dialog-wrapper">
        <header>标题</header>
        <main>
            <p>第一行子</p>
            <p>第二行子</p>
        </main>
        <footer>
            <Button>确定</Button>
            <Button>取消</Button>
        </footer>
    </div>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
    components: {Button}
}
</script>
