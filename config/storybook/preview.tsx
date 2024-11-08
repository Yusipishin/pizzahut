import { Meta } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { TranslationDecorator } from '@/shared/config/storybook/TranslationDecorator';

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        defaultValue: 'ru',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'ru', right: 'ru', title: 'Русский' },
                { value: 'en', right: 'en', title: 'English' },
            ],
        },
    },
};

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
        TranslationDecorator,
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
