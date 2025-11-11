import type { Meta, StoryObj } from '@storybook/react';
import LoginPhone from './LoginPhone';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof LoginPhone> = {
    component: LoginPhone,
    title: 'features/AuthByTelephone/LoginPhone',
    decorators: [StoreDecorator({})],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
