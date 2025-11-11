import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
    component: LoginForm,
    title: 'features/AuthByTelephone/LoginForm',
    decorators: [StoreDecorator({})],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
