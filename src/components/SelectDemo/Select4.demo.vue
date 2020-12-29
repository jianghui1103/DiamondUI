<demo>
搜索功能
</demo>
<template>
<div>
    <Diamond-select  v-model:modelValue="value" filterable placeholder="请选择">
        <Diamond-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
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
        const value = ref('');
        const data = reactive({
            options: [{
                value: '选项1',
                label: '青菜'
            },{
                value: '选项2',
                label: '双皮奶'
            }]
        })
        return {
            value,
            ...toRefs(data),
        };
    }
    
}
</script>