import { render, screen } from '@testing-library/react';
import { Button } from '../Button/Button';

describe('shared/ui/Button.test', () => {
    test('Render', () => {
        render(<Button />);
        expect(screen.getByTestId('Button')).toBeInTheDocument();
    });

    test('Apply custom className', () => {
        render(<Button className="customClass" />);
        expect(screen.getByTestId('Button')).toHaveClass('customClass');
        screen.debug();
    });

    test('Have clear theme by default', () => {
        render(<Button />);
        expect(screen.getByTestId('Button')).toHaveClass('clear');
        screen.debug();
    });

    test('Have accent theme', () => {
        render(<Button theme="accent" />);
        expect(screen.getByTestId('Button')).toHaveClass('accent');
        screen.debug();
    });

    test('Have half radius', () => {
        render(<Button radius="halfRadius" />);
        expect(screen.getByTestId('Button')).toHaveClass('halfRadius');
        screen.debug();
    });

    test('Have M size', () => {
        render(<Button size="size_m" />);
        expect(screen.getByTestId('Button')).toHaveClass('size_m');
        screen.debug();
    });

    test('Have scale effect', () => {
        render(<Button effect="scaleEffect" />);
        expect(screen.getByTestId('Button')).toHaveClass('scaleEffect');
        screen.debug();
    });

    test('Have max width', () => {
        render(<Button max />);
        expect(screen.getByTestId('Button')).toHaveClass('max');
        screen.debug();
    });

    test('Is square', () => {
        render(<Button square />);
        expect(screen.getByTestId('Button')).toHaveClass('square');
        screen.debug();
    });

    test('Is disabled', () => {
        render(<Button disabled />);
        expect(screen.getByTestId('Button')).toHaveClass('disabled');
        expect(screen.getByTestId('Button')).toBeDisabled();
        screen.debug();
    });
});
