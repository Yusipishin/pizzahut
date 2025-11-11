import type { Meta, StoryObj } from '@storybook/react';
import { UserDropdown } from './UserDropdown';

const meta: Meta<typeof UserDropdown> = {
    component: UserDropdown,
    title: 'features/UserDropdown',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
