import {fn} from '@storybook/test';

import Input from '../../src/components/Form/Input.vue';

export default {
    component: Input,
    argTypes: {
        before: { control: 'text' },
        after: { control: 'text' },
        disabled: { type: 'boolean' },
    },
    args: {
        before: 'https://',
        after: '@gmail.com',
        disabled: false,
        onClick: fn(),
    },
};

export const Playground = {};