import type {StorybookConfig} from '@storybook/vue3-vite'

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.stories.ts",
        "../stories/**/*.mdx",
    ],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/experimental-addon-test",
        "@storybook/addon-styling-webpack",
        "storybook-dark-mode",
    ],
    typescript: {
        check: false,
    },
    framework: {
        name: "@storybook/vue3-vite",
        options: {}
    }
};

export default config;