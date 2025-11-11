import type { Meta, StoryObj } from '@storybook/react';
import LoginCode from './LoginCode';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof LoginCode> = {
    component: LoginCode,
    title: 'features/AuthByTelephone/LoginCode',
    decorators: [
        StoreDecorator({
            loginForm: {
                isLoading: false,
                telephone: '79121104933',
            },
        }),
    ],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
