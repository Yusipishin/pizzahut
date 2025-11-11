import type { Meta, StoryObj } from '@storybook/react';
import { ProductList } from './ProductList';

const meta: Meta<typeof ProductList> = {
    component: ProductList,
    title: 'entities/Product/ProductList',
    decorators: [],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
