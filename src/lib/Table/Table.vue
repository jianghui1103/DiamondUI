<template>
<div>
    <slot />
</div>
</template>

<script lang="ts">
export default {
    name: 'tableColumn',
    props: {
        tableData: Array
    }
}
</script>