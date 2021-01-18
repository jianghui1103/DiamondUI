<demo>
常规使用
</demo>
<template>
<div>
    <Diamond-table :data="tableData" style="width: 100%">
        <Diamond-table-column prop="date" label="日期" width="180"> </Diamond-table-column>
        <Diamond-table-column prop="name" label="姓名" width="180"> </Diamond-table-column>
        <Diamond-table-column prop="address" label="地址"> </Diamond-table-column>
    </Diamond-table>
</div>
</template>

<script lang="ts">
import Vue, { ref, reactive, toRefs } from 'vue'
export default {
    components: {
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