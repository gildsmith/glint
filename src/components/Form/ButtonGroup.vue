<script lang="ts" setup>

defineOptions({name: 'ButtonGroup'})

import Button from "./Button.vue";
</script>

<template>
    <div class="button-group">
        <slot>
            <Button variant="secondary"></Button>
            <Button variant="secondary"></Button>
            <Button variant="secondary"></Button>
        </slot>
    </div>
</template>

<style scoped>
@reference "../../styles/app.css";

.button-group {
    @apply inline-flex;
}

.button-group > * {
    @apply rounded-none -ml-px;
    @apply hover:z-1;
}

.button-group > *:first-child {
    @apply rounded-l-md ml-0;
}

.button-group > *:last-child {
    @apply rounded-r-md;
}
</style>