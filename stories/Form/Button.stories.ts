import {fn} from '@storybook/test';

import Button from '../../src/components/Form/Button.vue';

export default {
    component: Button,
    argTypes: {
        variant: {
            control: {type: 'select'},
            options: ['primary', 'secondary', 'tertiary']
        },
        danger: {type: 'boolean'},
        disabled: {type: 'boolean'},
    },
    args: {
        variant: 'secondary',
        danger: false,
        disabled: false,
        onClick: fn()
    },
};

export const Playground = {};