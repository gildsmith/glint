<script lang="ts" setup>
import {IconEye, IconEyeClosed} from '@tabler/icons-vue'
import {computed, ref, useAttrs} from 'vue'
import Input from "./Input.vue";

defineOptions({name: 'Password'})

const model = defineModel()
const attrs = useAttrs()

const visibility = ref(false)

function toggleVisibility() {
    visibility.value = !visibility.value
}

const inputType = computed(() => visibility.value ? 'text' : 'password')
const isDisabled = computed(() => Boolean(attrs.disabled))
</script>

<template>
    <div class="container" :data-disabled="isDisabled || null">
        <input v-model="model"  class="input" :type="inputType" v-bind="attrs"/>
        <div class="switch" @click="toggleVisibility">
            <IconEye size="16" v-if="visibility"/>
            <IconEyeClosed size="16" v-else/>
        </div>
    </div>
</template>

<style scoped>
@reference "../../styles/app.css";

.container {
    @apply focus-within:input-focus;
    @apply input-base input-normal;
    @apply flex divide-x divide-inherit relative overflow-hidden max-w-full;
}

.container[data-disabled] {
    @apply input-disabled;
}

.input {
    @apply input-spacing;
    @apply flex-1 mr-8;
    @apply focus:outline-none;
}

.switch {
    @apply absolute right-0 w-8 h-full flex items-center justify-center;
}
</style>
