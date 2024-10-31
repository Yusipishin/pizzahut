import { render, screen } from '@testing-library/react';
import { Flex } from './Flex';

const content = 'FlexTest';

describe('shared/ui/Stack/Flex.test', () => {
    test('Renders correctly with children', () => {
        render(<Flex>{content}</Flex>);
        expect(screen.getByTestId('Flex.div')).toBeInTheDocument();
    });

    test('Applies custom className', () => {
        render(<Flex className="customClass">{content}</Flex>);
        expect(screen.getByTestId('Flex.div')).toHaveClass('customClass');
    });

    test('applies justify classes correctly', () => {
        render(<Flex justify="center">{content}</Flex>);
        expect(screen.getByTestId('Flex.div')).toHaveClass('justifyCenter');
    });

    test('applies align classes correctly', () => {
        render(<Flex align="end">{content}</Flex>);
        expect(screen.getByTestId('Flex.div')).toHaveClass('alignEnd');
    });

    test('applies direction classes correctly', () => {
        render(<Flex direction="column">{content}</Flex>);
        expect(screen.getByTestId('Flex.div')).toHaveClass('directionColumn');
    });

    test('applies gap classes correctly', () => {
        render(<Flex gap="16">{content}</Flex>);
        expect(screen.getByTestId('Flex.div')).toHaveClass('gap16');
    });

    test('applies max class when max is true', () => {
        render(<Flex max>{content}</Flex>);
        expect(screen.getByTestId('Flex.div')).toHaveClass('max');
    });

    test('applies wrap class when wrap is true', () => {
        render(<Flex wrap>{content}</Flex>);
        expect(screen.getByTestId('Flex.div')).toHaveClass('wrap');
    });
});
