import type { Meta, StoryObj } from '@storybook/react';
import LoginCode from './LoginCode';

const meta: Meta<typeof LoginCode> = {
    component: LoginCode,
    title: 'shared/LoginCode',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
