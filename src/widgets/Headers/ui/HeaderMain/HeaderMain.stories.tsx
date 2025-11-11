import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMain } from './HeaderMain';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof HeaderMain> = {
    component: HeaderMain,
    title: 'widgets/Headers/HeaderMain',
    decorators: [StoreDecorator({})],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
