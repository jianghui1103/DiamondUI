<template>
<div class="topnav">
    <div class="logo">
        <router-link to="/">
            <svg class="icon">
                <use xlink:href="#icon-Diamond"></use>
            </svg>
        </router-link>
    </div>
    <ul class="menu">
        <li>文档</li>
    </ul>
    <span v-if="menuShow" class="toggleAside" @click="toggleMenu">
        <svg class="icon">
            <use xlink:href="#icon-caidan"></use>
        </svg>
    </span>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue';
export default {
    props: {
        menuShow: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const menuVisible = inject < Ref < boolean > > ('menuVisible') // get
        const toggleMenu = () => {
            console.log(menuVisible.value)
            menuVisible.value = !menuVisible.value
        }
        return {
            toggleMenu
        }
    }
}
</script>

<style lang="scss" scoped>
.topnav {
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;

    >.logo {
        max-width: 6em;
        margin-right: auto;

        >a .icon {
            width: 30px;
            height: 30px;
        }
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        color: #1d2c40;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleAside {
        display: inline-block;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;

        >svg {
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width: 500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>
