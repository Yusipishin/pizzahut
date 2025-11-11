import type { Meta, StoryObj } from '@storybook/react';
import { ProductItem } from './ProductItem';

const meta: Meta<typeof ProductItem> = {
    component: ProductItem,
    title: 'entities/Product/ProductItem',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
