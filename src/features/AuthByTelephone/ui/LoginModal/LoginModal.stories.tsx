import type { Meta, StoryObj } from '@storybook/react';
import { LoginModal } from './LoginModal';

const meta: Meta<typeof LoginModal> = {
    component: LoginModal,
    title: 'features/AuthByTelephone/LoginModal',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
