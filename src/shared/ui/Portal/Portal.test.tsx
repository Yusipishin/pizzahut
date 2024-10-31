import { render } from '@testing-library/react';
import { Portal } from './Portal';

const content = 'Portal Content';

describe('shared/ui/Portal', () => {
    test('Renders children in the default container (document.body)', () => {
        const { getByText } = render(<Portal>{content}</Portal>);
        expect(document.body).toContainElement(getByText(content));
    });

    test('Renders children in the specified container', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const { getByText } = render(
            <Portal container={container}>{content}</Portal>,
        );
        expect(container).toContainElement(getByText(content));

        document.body.removeChild(container);
    });
});
