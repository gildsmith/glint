<script lang="ts" setup>

defineOptions({name: 'Button'})

interface PropsInterface {
    variant?: 'primary' | 'secondary' | 'tertiary',
    label?: string,
    danger?: boolean,
}

withDefaults(
    defineProps<PropsInterface>(), {
        variant: 'secondary',
        label: 'Button',
        danger: false,
    }
)
</script>

<template>
    <button :class="['button', variant, { danger: danger }]">
        <span class="wrapper">
            <slot>{{ label }}</slot>
        </span>
    </button>
</template>

<style scoped>
@reference "../../styles/app.css";

.wrapper {
    @apply input-spacing;
    @apply block;
    @apply active:translate-y-px;
}

.button {
    @apply input-base cursor-pointer;
    @apply active:shadow-none active:inset-shadow-2xs;
    @apply focus-visible:input-focus;
    @apply disabled:input-disabled;
}

.primary {
    @apply input-high;
}

.secondary {
    @apply input-normal;
}

.tertiary {
    @apply input-low;
}

.primary.danger {
    @apply input-danger-high;
}

.secondary.danger {
    @apply input-danger-normal;
}

.tertiary.danger {
    @apply input-danger-low;
}
</style>
