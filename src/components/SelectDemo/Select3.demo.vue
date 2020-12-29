<demo>
多选输入框
</demo>
<template>
<div>
    <Diamond-select  v-model:modelValue="value" multiple placeholder="请选择" @change="handleChange">
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
import { ref, reactive, toRefs } from 'vue'
export default {
    components: {
        DiamondSelect,DiamondOption
    },
    setup() {
        const data = reactive({
            options: [{
                value: '选项1',
                label: '青菜',
            },{
                value: '选项2',
                label: '双皮奶'
            },{
                value: '选项3',
                label: '橘子'
            },{
                value: '选项4',
                label: '橙子'
            }],
            value: []
        })
        const handleChange = (value)=>{
            console.log(value)
        }
        return {
            ...toRefs(data),
            handleChange
        };
    }
    
}
</script>