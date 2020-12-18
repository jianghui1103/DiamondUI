<template>
<div class="inputNum">
    <DInput v-model:modelValue="inputValue" placeholder="密码框" />
</div>
</template>

<script lang="ts">
import DInput from '../Input/Input.vue'
import { ref } from 'vue'
export default {
    components: {
        DInput
    },
    props: {

    },
    setup() {
        const inputValue = ref('1')
        return {
            inputValue
        }
    }
}
</script>

<style lang="scss">
.Diamond-input .Diamond-input__inner{
    text-align:center
}
</style>