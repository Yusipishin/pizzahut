import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('shared/ui/Card.test', () => {
    test('Render', () => {
        render(<Card>CardTest</Card>);
        expect(screen.getByTestId('Card.article')).toBeInTheDocument();
        screen.debug();
    });

    test('Have outline theme', () => {
        render(<Card theme="outline">CardTest</Card>);
        expect(screen.getByTestId('Card.article')).toHaveClass('outline');
        screen.debug();
    });

    test('Have not outline theme by default', () => {
        render(<Card>CardTest</Card>);
        expect(screen.getByTestId('Card.article')).not.toHaveClass('outline');
        screen.debug();
    });

    test('Have max width', () => {
        render(<Card max>CardTest</Card>);
        expect(screen.getByTestId('Card.article')).toHaveClass('maxWidth');
        screen.debug();
    });

    test('Apply custom className', () => {
        render(<Card className="customClass">CardTest</Card>);
        expect(screen.getByTestId('Card.article')).toHaveClass('customClass');
        screen.debug();
    });
});
