import {fn} from '@storybook/test';

import Input from '../../src/components/Form/Input.vue';

export default {
    component: Input,
    argTypes: {
        before: { control: 'text' },
        after: { control: 'text' },
        disabled: { type: 'boolean' },
        type: {type: 'string'},
    },
    args: {
        before: 'https://',
        after: '@gmail.com',
        disabled: false,
        onClick: fn(),
        value: 'Example Value',
    },
};

export const Playground = {};