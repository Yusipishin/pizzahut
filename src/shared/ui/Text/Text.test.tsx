import { render, screen } from '@testing-library/react';
import { Text, TextSize } from './Text';

const title = 'TextTitle';
const text = 'TextContent';

describe('shared/ui/Text', () => {
    test('Renders correctly with title and text', () => {
        render(<Text title={title} text={text} />);
        expect(screen.getByTestId('Text.Header')).toBeInTheDocument();
        expect(screen.getByTestId('Text.Paragraph')).toBeInTheDocument();
    });

    test('Applies custom className', () => {
        render(<Text className="customClass" text={text} />);
        expect(screen.getByTestId('Text.div')).toHaveClass('customClass');
    });

    test('Applies theme classes correctly', () => {
        render(<Text theme="error" text="Error content" />);
        expect(screen.getByTestId('Text.div')).toHaveClass('error');
    });

    test('Applies alignment classes correctly', () => {
        render(<Text align="center" text={text} />);
        expect(screen.getByTestId('Text.div')).toHaveClass('center');
    });

    test('Applies size classes correctly', () => {
        render(<Text size={TextSize.L} text={text} />);
        expect(screen.getByTestId('Text.div')).toHaveClass('size_l');
    });

    test('Does not render title when not provided', () => {
        render(<Text text={text} />);
        expect(screen.queryByTestId('Text.Header'));
    });

    test('Does not render text when not provided', () => {
        render(<Text title={title} />);
        expect(screen.queryByTestId('Text.Paragraph'));
    });

    test('Renders with default props', () => {
        render(<Text />);
        expect(screen.getByTestId('Text.div')).toHaveClass(
            'primary',
            'left',
            'size_s',
        );
        expect(screen.queryByTestId('Text.Header'));
        expect(screen.queryByTestId('Text.Paragraph'));
    });
});
