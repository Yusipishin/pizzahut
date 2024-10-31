import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('shared/ui/Loader.test', () => {
    test('Render with correct svg', () => {
        render(<Loader />);
        expect(screen.getByTestId('Loader.div')).toBeInTheDocument();
        screen.debug();
    });

    test('Apply custom className', () => {
        render(<Loader className="customClass" />);
        expect(screen.getByTestId('Loader.div')).toHaveClass('customClass');
        screen.debug();
    });
});
