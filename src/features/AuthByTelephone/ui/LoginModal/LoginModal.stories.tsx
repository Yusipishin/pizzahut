import type { Meta, StoryObj } from '@storybook/react';
import { LoginModal } from './LoginModal';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof LoginModal> = {
    component: LoginModal,
    title: 'features/AuthByTelephone/LoginModal',
    decorators: [StoreDecorator({})],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
    },
};

export const Close: Story = {
    args: {
        isOpen: false,
    },
};
