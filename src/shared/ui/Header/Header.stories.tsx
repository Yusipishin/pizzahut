import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
    component: Header,
    title: 'shared/Header',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Header text',
    },
};

export const Outline: Story = {
    args: {
        outline: true,
        children: 'Header text',
    },
};
