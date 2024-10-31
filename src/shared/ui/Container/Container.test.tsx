import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Container } from './Container';

describe('shared/ui/Container.test', () => {
    test('Render', () => {
        render(<Container>ContainerTest</Container>);
        expect(screen.getByTestId('Container.Tag')).toBeInTheDocument();
        screen.debug();
    });

    test('Have section tag by default', () => {
        render(<Container>ContainerTest</Container>);
        expect(screen.getByTestId('Container.Tag').tagName).toBe('SECTION');
        screen.debug();
    });

    test('Have footer tag', () => {
        render(<Container Tag="footer">ContainerTest</Container>);
        expect(screen.getByTestId('Container.Tag').tagName).toBe('FOOTER');
        screen.debug();
    });

    test('Apply custom className', () => {
        render(<Container className="customClass">ContainerTest</Container>);
        expect(screen.getByTestId('Container.Tag')).toHaveClass('customClass');
        screen.debug();
    });

    test('Render anchor block when id is provided', () => {
        const anchorRef = createRef<HTMLDivElement>();
        const id = 'TestAnchor';

        render(
            <Container id={id} anchorRef={anchorRef}>
                ContainerTest
            </Container>,
        );

        const anchorBlock = screen.getByTestId('Container.divAnchor');
        expect(anchorBlock).toBeInTheDocument();
        expect(anchorBlock).toHaveAttribute('id', id);
        expect(anchorBlock).toHaveClass('anchorBlock');
        expect(anchorBlock).toBe(anchorRef.current);
        screen.debug();
    });

    test('Not render anchor block without id', () => {
        const anchorRef = createRef<HTMLDivElement>();
        render(<Container anchorRef={anchorRef}>ContainerTest</Container>);
        expect(screen.queryByTestId('Container.divAnchor'));
        screen.debug();
    });
});
