import { Meta } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
    },
    decorators: [
        StyleDecorator,
        RouterDecorator,
        SuspenseDecorator,
        ThemeDecorator(Theme.DARK),
        withThemeByClassName({
            defaultTheme: 'dark',
            parentSelector: '.app',
            themes: {
                dark: Theme.DARK,
                light: Theme.LIGHT,
            },
        }),
    ],
};

export default meta;
