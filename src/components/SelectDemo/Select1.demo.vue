<demo>
禁用选择框
</demo>
<template>
<div>
    <Diamond-select  v-model:modelValue="value" placeholder="请选择" @change="handleChange">
        <Diamond-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disable="item.disable"
        >
        </Diamond-option>
    </Diamond-select> 
</div>
</template>

<script lang="ts">
import DiamondSelect from '../../lib/Select/Select.vue';
import DiamondOption from '../../lib/Option/Option.vue'
import Vue, { ref, reactive, toRefs } from 'vue'
export default {
    components: {
        DiamondSelect,DiamondOption
    },
    setup() {
        const value = ref('');
        const data = reactive({
            options: [{
                value: '选项1',
                label: '青菜',
                disable: true
            },{
                value: '选项2',
                label: '双皮奶'
            }]
        })
        const handleChange = (value)=>{
            console.log(value)
        }
        return {
            value,
            ...toRefs(data),
            handleChange
        };
    }
    
}
</script>