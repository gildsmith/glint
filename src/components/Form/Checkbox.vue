<script lang="ts" setup>
import {IconCheck} from '@tabler/icons-vue'
import {computed, useAttrs} from 'vue'

defineOptions({name: 'Checkbox'})

const model = defineModel<boolean>()
const attrs = useAttrs()

function toggle() {
    if (attrs.disabxled) return
    model.value = !model.value
}

const isDisabled = computed(() => Boolean(attrs.disabled))
</script>

<template>
    <div class="container" @click="toggle" :data-disabled="isDisabled || null">
        <input v-model="model" class="input" type="checkbox" v-bind="attrs"/>
        <IconCheck v-if="model" size="16"/>
    </div>
</template>

<style scoped>
@reference "../../styles/app.css";

.container {
    @apply input-base input-normal;
    @apply h-6 w-6 flex items-center justify-center;
}

.container[data-disabled] {
    @apply input-disabled;
}

.input {
    @apply hidden;
}
</style>