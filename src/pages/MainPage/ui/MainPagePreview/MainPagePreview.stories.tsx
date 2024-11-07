import type { Meta, StoryObj } from '@storybook/react';
import { MainPagePreview } from './MainPagePreview';

const meta: Meta<typeof MainPagePreview> = {
    component: MainPagePreview,
    title: 'pages/MainPage/MainPagePreview',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
