import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('shared/ui/Skeleton.test', () => {
    test('Renders correctly', () => {
        render(<Skeleton />);
        expect(screen.getByTestId('Skeleton.div')).toBeInTheDocument();
    });

    test('Applies custom className', () => {
        render(<Skeleton className="customClass" />);
        expect(screen.getByTestId('Skeleton.div')).toHaveClass('customClass');
    });

    test('Applies custom height and width', () => {
        render(<Skeleton height={100} width={200} />);
        expect(screen.getByTestId('Skeleton.div')).toHaveStyle({
            height: '100px',
            width: '200px',
        });
    });

    test('Applies custom marginTop and marginBottom', () => {
        render(<Skeleton marginTop={100} marginBottom={100} />);
        expect(screen.getByTestId('Skeleton.div')).toHaveStyle({
            'margin-top': '100px',
            'margin-bottom': '100px',
        });
    });

    test('Applies custom border radius', () => {
        render(<Skeleton border={20} />);
        expect(screen.getByTestId('Skeleton.div')).toHaveStyle(
            'border-radius: 20px',
        );
    });

    test('Applies default border radius when not specified', () => {
        render(<Skeleton />);
        expect(screen.getByTestId('Skeleton.div')).toHaveStyle(
            'border-radius: 10px',
        );
    });
});
