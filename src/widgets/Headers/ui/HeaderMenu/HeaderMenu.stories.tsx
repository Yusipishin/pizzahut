import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMenu } from './HeaderMenu';

const meta: Meta<typeof HeaderMenu> = {
    component: HeaderMenu,
    title: 'shared/HeaderMenu',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
