import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'shared/Button',
};
type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: 'clear',
    },
};

export const Accent: Story = {
    args: {
        children: 'Text',
        theme: 'accent',
    },
};

export const Inverted: Story = {
    args: {
        children: 'Text',
        theme: 'inverted',
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: 'outline',
    },
};
