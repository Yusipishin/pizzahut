import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { Text } from '../Text';

const meta: Meta<typeof Sidebar> = {
    component: Sidebar,
    title: 'shared/Sidebar',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: <Text text="TEXXXXXXXXXXT" />,
    },
};
