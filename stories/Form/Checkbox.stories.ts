import {fn} from '@storybook/test';

import Checkbox from '../../src/components/Form/Checkbox.vue';

export default {
    component: Checkbox,
    argTypes: {
        disabled: { type: 'boolean' },
    },
    args: {
        disabled: false,
        onClick: fn(),
    },
};

export const Playground = {};