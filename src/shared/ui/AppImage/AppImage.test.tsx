import { render, screen } from '@testing-library/react';
import { AppImage } from './AppImage';

const imagePath = '../../assets/tests/test-img.jpg';

describe('shared/ui/AppImage.test', () => {
    test('Render with correct image', () => {
        render(<AppImage src={imagePath} />);
        expect(screen.getByTestId('AppImage.img')).toBeInTheDocument();
        expect(screen.getByTestId('AppImage.img')).toHaveAttribute(
            'src',
            imagePath,
        );
        screen.debug();
    });

    test('Apply custom className', () => {
        render(<AppImage className="customClass" />);
        expect(screen.getByTestId('AppImage.img')).toHaveClass('customClass');
        screen.debug();
    });

    test('Have size 100', () => {
        render(<AppImage size={100} />);
        expect(screen.getByTestId('AppImage.img')).toHaveStyle({
            width: '100px',
            height: '100px',
        });
        screen.debug();
    });

    test('Show fallback when loading', () => {
        const fallbackElement = <div data-testid="fallback">Loading...</div>;
        render(<AppImage src={imagePath} fallback={fallbackElement} />);
        expect(screen.getByTestId('fallback')).toBeInTheDocument();
    });
});
