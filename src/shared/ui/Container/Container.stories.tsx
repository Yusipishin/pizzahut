import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Text } from '../Text';

const meta: Meta<typeof Container> = {
    component: Container,
    title: 'shared/Container',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: <Text title="titletitle" text="texttexttexttexttexttext" />,
    },
};
