import {fn} from '@storybook/test';

import Password from '../../src/components/Form/Password.vue';

export default {
    component: Password,
    argTypes: {
        disabled: { type: 'boolean' },
    },
    args: {
        disabled: false,
        onClick: fn(),
        value: 'P@ssw0rd',
    },
};

export const Playground = {};