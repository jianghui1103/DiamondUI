<template>
<div>
    <div class="topAndBanner">
        <Topnav />
        <div class="banner">
            <h1>DiamondUI</h1>
            <h1>一个Vue3 UI框架</h1>
            <p class="actions">
                <a href="https://github.com/jianghui1103/DiamondUI" target="_brank">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
    <div class="prefer">
        <div class="flex-box">
            <div class="icon-box">
                <svg class="icon">
                    <use xlink:href="#icon-vue"></use>
                </svg>
            </div>
            <div class="text">
                <h3>基于 Vue3</h3>
                <p>使用了Vue3 Composition API</p>
            </div>
        </div>
        <div class="flex-box">
            <div class="icon-box">
                <svg class="icon">
                    <use xlink:href="#icon-ts"></use>
                </svg>
            </div>
            <div class="text">
                <h3>基于 TypeScript</h3>
                <p>源代码基于TypeScirpt书写</p>
            </div>
        </div>
        <div class="flex-box">
            <div class="icon-box">
                <svg class="icon">
                    <use xlink:href="#icon-scss"></use>
                </svg>
            </div>
            <div class="text">
                <h3>基于 Scss</h3>
                <p>样式书写使用了Scss</p>
            </div>
        </div>
        <div class="flex-box">
            <div class="icon-box">
                <svg class="icon">
                    <use xlink:href="#icon-bianli"></use>
                </svg>
            </div>
            <div class="text">
                <h3>代码易上手</h3>
                <p>每个组件的代码极其简单</p>
            </div>
        </div>

    </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
    components: {
        Topnav
    }
}
</script>

<style lang="scss" scoped>
.topAndBanner {
    background: linear-gradient(145deg, rgba(2, 0, 36, 1) 0%, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
}

.banner {
    color: #1d2c40;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    >.actions {
        padding: 14px 0;

        a {
            margin: 0 10px;
            background: #02bcb0;
            color: #fff;
            display: inline-block;
            $h: 40px;
            height: $h;
            line-height: $h;
            border-radius: 5px;
            padding: 0 10px;
        }
    }
}

.prefer {
    display: flex;
    flex-wrap: wrap;
    padding-top: 80px;
    margin: 0 auto;
}

@media(min-width: 400px) {
    $w: 400px;

    .prefer {
        width: $w;

        >.flex-box {
            width: $w;
        }
    }
}

@media(min-width: 800px) {
    $w: 800px;

    .prefer {
        width: $w;

        >.flex-box {
            width: $w/2;
        }
    }
}

@media(min-width: 1200px) {
    $w: 1200px;

    .prefer {
        width: $w;

        >.flex-box {
            width: $w/4;
        }
    }
}

.flex-box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: center;

    >.icon-box {
        margin-right: 10px;

        >svg {
            width: 60px;
            height: 60px;
        }
    }

    >.text {
        width: 250px;

        >h3 {
            font-size: 20px;
            margin-bottom: 5px;
        }
    }
}
</style>
