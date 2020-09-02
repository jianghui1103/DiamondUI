<template>
<div>
    <Topnav />
    <div class="banner">
        <h1>DiamondUI</h1>
        <h1>一个江辉创建的Vue3 UI框架</h1>
        <p class="actions">
            <a href="">GitHub</a>
            <a href="">开始</a>
        </p>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>
