<template>
    <a
        v-if="href && isExternal"
        :href="href"
        :target="target"
        :rel="rel || (target === '_blank' ? 'noopener noreferrer' : undefined)"
        :class="baseClasses"
    >
        {{ text }}
    </a>

    <NuxtLink
        v-else-if="href"
        :to="href"
        :class="baseClasses"
    >
        {{ text }}
    </NuxtLink>

    <button
        v-else
        :type="type"
        :disabled="disabled"
        @click="onClick"
        :class="baseClasses"
    >
        {{ text }}
    </button>
</template>

<script setup lang="ts">
interface Props {
    text?: string;
    onClick?: () => void;
    disabled?: boolean;
    active?: boolean;
    variant?: 'primary' | 'secondary';
    class?: string;
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    rel?: string;
    type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    active: false,
    variant: 'primary',
    class: '',
    type: 'button',
});

const isExternal = computed(() => {
    return props.href?.startsWith('http') || props.href?.startsWith('//');
});

const baseClasses = computed(() => {
    const classes = [
        'text-xl pt-2.5 pb-3 px-8 transition duration-300 ease-in-out inline-block text-center rounded-full',
    ];

    if (props.variant === 'primary') {
        if (props.disabled) {
            classes.push('cursor-not-allowed bg-gray-500 text-gray-300');
        } else if (props.active) {
            classes.push('bg-[#009000] text-bg hover:bg-[#B2F42C] hover:text-text-green-prim');
        } else {
            classes.push('bg-light-green hover:bg-[#B2F42C] text-text-green-prim');
        }
    } else {
        if (props.disabled) {
            classes.push('cursor-not-allowed border border-gray-500 text-gray-300');
        } else if (props.active) {
            classes.push('border border-[#009000] text-text-green-prim hover:bg-[#B2F42C] hover:text-text-green-prim');
        } else {
            classes.push('border border-light-green text-text-green-prim hover:bg-[#B2F42C] hover:border-[#B2F42C] hover:text-text-green-prim');
        }
    }

    if (props.class) {
        classes.push(props.class);
    }

    return classes.join(' ');
});
</script>