import type { Meta, StoryObj } from '@storybook/react';
import LoginPhone from './LoginPhone';

const meta: Meta<typeof LoginPhone> = {
    component: LoginPhone,
    title: 'shared/LoginPhone',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
