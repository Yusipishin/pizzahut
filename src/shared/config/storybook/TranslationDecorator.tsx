import { StoryContext, StoryFn } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { useEffect } from 'react';
import i18n from '../i18n/i18n';

export const TranslationDecorator = (
    StoryComponent: StoryFn,
    { globals }: StoryContext,
) => {
    useEffect(() => {
        i18n.changeLanguage(globals.locale);
    }, [globals.locale]);

    return (
        <I18nextProvider i18n={i18n}>
            <StoryComponent />
        </I18nextProvider>
    );
};
