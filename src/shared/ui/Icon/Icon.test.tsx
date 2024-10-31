import { render, screen, waitFor } from '@testing-library/react';
import TestSvg from '@/shared/assets/tests/test-icon.svg';
import { Icon } from './Icon';

describe('shared/ui/Icon.test', () => {
    test('Render with correct svg', () => {
        render(<Icon Svg={TestSvg} />);
        waitFor(() => {
            expect(screen.getByTestId('Icon.Svg')).toBeInTheDocument();
            expect(screen.getByTestId('Icon.Svg').tagName).toBe('SVG');
        });
        screen.debug();
    });

    test('Have inverted theme', () => {
        render(<Icon inverted Svg={TestSvg} />);
        waitFor(() => {
            expect(screen.queryByTestId('Icon.Svg')).toHaveClass('inverted');
        });
        screen.debug();
    });

    test('Apply custom className', () => {
        render(<Icon Svg={TestSvg} className="customClass" />);
        waitFor(() => {
            expect(screen.getByTestId('Icon.Svg')).toHaveClass('customClass');
        });
        screen.debug();
    });
});
