import type { Meta, StoryObj } from '@storybook/react';
import { MainPageMenu } from './MainPageMenu';

const meta: Meta<typeof MainPageMenu> = {
    component: MainPageMenu,
    title: 'pages/MainPage/MainPageMenu',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
