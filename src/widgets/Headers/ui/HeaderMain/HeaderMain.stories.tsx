import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMain } from './HeaderMain';

const meta: Meta<typeof HeaderMain> = {
    component: HeaderMain,
    title: 'widgets/Headers/HeaderMain',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
