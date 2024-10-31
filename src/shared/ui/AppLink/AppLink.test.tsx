import { screen } from '@testing-library/react';
import { AppLink } from './AppLink';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('shared/ui/AppLink.test', () => {
    test('Render with correct href', () => {
        componentRender(<AppLink to="/about">Link</AppLink>);
        expect(screen.getByTestId('AppLink.Link')).toBeInTheDocument();
        expect(screen.getByTestId('AppLink.Link')).toHaveAttribute(
            'href',
            '/about',
        );
        screen.debug();
    });

    test('Have primary theme by default', () => {
        componentRender(<AppLink to="/">Link</AppLink>);
        expect(screen.getByTestId('AppLink.Link')).toHaveClass('primary');
        screen.debug();
    });

    test('Have outline theme', () => {
        componentRender(
            <AppLink to="/" theme="outline">
                Link
            </AppLink>,
        );
        expect(screen.getByTestId('AppLink.Link')).toHaveClass('outline');
        screen.debug();
    });

    test('Apply custom className', () => {
        componentRender(
            <AppLink to="/" className="customClass">
                Link
            </AppLink>,
        );
        expect(screen.getByTestId('AppLink.Link')).toHaveClass('customClass');
        screen.debug();
    });
});
