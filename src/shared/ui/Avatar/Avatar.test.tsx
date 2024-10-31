import { render, screen, waitFor } from '@testing-library/react';
import { Avatar } from './Avatar';

const imagePath = '../../assets/tests/test-img.jpg';

describe('shared/ui/Avatar.test', () => {
    test('Render with correct image', () => {
        render(<Avatar src={imagePath} />);
        waitFor(() => {
            expect(screen.getByTestId('Avatar.AppImage')).toBeInTheDocument();
            expect(screen.getByTestId('Avatar.AppImage')).toHaveAttribute(
                'src',
                imagePath,
            );
        });
        screen.debug();
    });

    test('Apply custom className', () => {
        render(<Avatar src={imagePath} />);
        waitFor(() => {
            expect(screen.getByTestId('Avatar.AppImage')).toHaveClass(
                'customClass',
            );
        });
        screen.debug();
    });

    test('Have size 100px', () => {
        render(<Avatar src={imagePath} />);
        waitFor(() => {
            expect(screen.getByTestId('Avatar.AppImage')).toHaveStyle({
                width: '100px',
                height: '100px',
            });
        });
        screen.debug();
    });

    test('Have alt attribute', () => {
        render(<Avatar alt="AltText" src={imagePath} />);
        waitFor(() => {
            expect(screen.getByTestId('Avatar.AppImage')).toBeInTheDocument();
            expect(screen.getByTestId('Avatar.AppImage')).toHaveAttribute(
                'alt',
                'AltText',
            );
        });
        screen.debug();
    });
});
