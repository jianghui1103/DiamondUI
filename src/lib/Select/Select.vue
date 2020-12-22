<template>
    <div class="Diamond-select">
        <Diamond-input v-model:modelValue="selectValue" readonly placeholder="请选择" @click="toggle">
        </Diamond-input>
        <diamond-select-dropdown>
            <ul class="Diamond-select-dropdown__list">
                <slot/>
            </ul>
        </diamond-select-dropdown>
    </div>
</template>

<script lang="ts">
import {ref} from 'vue'
import DiamondInput from '../Input/Input.vue'
import DiamondSelectDropdown from './SelectDropdown.vue'
export default {
    components: {
        DiamondInput,DiamondSelectDropdown
    },
    provide() {
        return {
            select: this
        }
    },
    props: {
        modelValue:[ String || Number]
    },
    setup(props) {
        const { modelValue } = props
        const selectValue = ref(modelValue)




        return {
            selectValue
        }
    }

}
</script>

<style lang="scss" scoped>

</style>