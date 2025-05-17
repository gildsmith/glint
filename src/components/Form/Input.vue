<script lang="ts" setup>

defineOptions({name: 'Input'})

interface PropsInterface {
    before?: string
    after?: string
}

const props = withDefaults(
    defineProps<PropsInterface>(), {
        before: undefined,
        after: undefined
    }
)
</script>

<template>
    <div class="container">
        <template v-if="$slots.before || props.before">
            <div class="before">
                <slot name="before">{{ props.before }}</slot>
            </div>
        </template>

        <input class="input" type="text" v-bind="$attrs" />

        <template v-if="$slots.after || props.after">
            <div class="after">
                <slot name="after">{{ props.after }}</slot>
            </div>
        </template>
    </div>
</template>

<style scoped>
@reference "../../styles/app.css";

.container {
    @apply focus-within:input-focus;
    @apply input-base input-normal overflow-hidden max-w-full;
    @apply flex divide-x divide-inherit;
}

.before,
.after {
    @apply input-spacing;
    @apply bg-slate-50 text-slate-400;
}

.input {
    @apply input-spacing;
    @apply flex-1;
    @apply focus:outline-none;
}
</style>
