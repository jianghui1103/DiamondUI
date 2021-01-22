<template>
<div class="Diamond-slider">
    <div class="Diamond-slider__runwary">
        <div class="Diamond-slider__bar">
        </div>
        <div class="Diamond-slider__button-wrapper">
            <div class="Diamond-slider__button">
            </div>
        </div>
    </div>
</div>
</template>


<script lang="ts">
export default {
    
}
</script>


<style lang="scss" scoped>
$h: 6px;
.Diamond-slider{
    &__runwary{
        width: 100%;
        height: 6px;
        margin: 16px 0;
        background-color: #e4e7ed;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        visibility: hidden;
    }
}
</style>