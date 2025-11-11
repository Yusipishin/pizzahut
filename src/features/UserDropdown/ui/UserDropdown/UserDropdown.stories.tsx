import type { Meta, StoryObj } from '@storybook/react';
import { UserDropdown } from './UserDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof UserDropdown> = {
    component: UserDropdown,
    title: 'features/UserDropdown',
    decorators: [
        (Story) => (
            <div style={{ display: 'inline-block' }}>
                <Story />
            </div>
        ),
        StoreDecorator({
            user: {
                _inited: true,
                authData: {
                    id: '123',
                    roles: [],
                    firstname: 'Alexey',
                },
            },
        }),
    ],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
