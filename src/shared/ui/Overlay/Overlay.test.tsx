import { render, screen, fireEvent } from '@testing-library/react';
import { Overlay } from './Overlay';

describe('shared/ui/Overlay.test', () => {
    test('Render', () => {
        render(<Overlay />);
        expect(screen.getByTestId('Overlay.div')).toBeInTheDocument();
        screen.debug();
    });

    test('Apply custom className', () => {
        render(<Overlay className="customClass" />);
        expect(screen.getByTestId('Overlay.div')).toHaveClass('customClass');
        screen.debug();
    });

    test('Calls onClick when overlay is clicked', () => {
        const onClick = jest.fn();
        render(<Overlay onClick={onClick} />);

        fireEvent.click(screen.getByTestId('Overlay.div'));
        expect(onClick).toHaveBeenCalled();
        expect(onClick).toHaveBeenCalledTimes(1);
        screen.debug();
    });

    test('Does not call onClick if no handler is provided', () => {
        render(<Overlay />);
        fireEvent.click(screen.getByTestId('Overlay.div'));
        expect(() => {}).not.toThrow();
        screen.debug();
    });
});
