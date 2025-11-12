import type { Meta, StoryObj } from '@storybook/react';
import { MainPageBanner } from './MainPageBanner';

const meta: Meta<typeof MainPageBanner> = {
    component: MainPageBanner,
    title: 'pages/MainPage/MainPageBanner',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
