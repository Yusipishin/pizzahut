import type { Meta, StoryObj } from '@storybook/react';
import { MainPageMenu } from './MainPageMenu';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof MainPageMenu> = {
    component: MainPageMenu,
    title: 'pages/MainPage/MainPageMenu',
    decorators: [StoreDecorator({})],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
