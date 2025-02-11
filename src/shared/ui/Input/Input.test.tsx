import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Input } from './Input';

describe('shared/ui/Input.test', () => {
    test('Render', () => {
        render(<Input id="input" />);
        expect(screen.getByTestId('Input.div')).toBeInTheDocument();
        screen.debug();
    });

    test('Render with placeholder', () => {
        render(<Input id="input" placeholder="Enter text" />);
        expect(screen.getByTestId('Input.label')).toBeInTheDocument();
        expect(screen.getByTestId('Input.label')).toHaveTextContent(
            'Enter text',
        );
        screen.debug();
    });

    test('Apply custom className', () => {
        render(<Input id="input" className="customClass" />);
        expect(screen.getByTestId('Input.div')).toHaveClass('customClass');
        screen.debug();
    });

    test('Handle change event', () => {
        const onChange = jest.fn();
        render(<Input id="input" onChange={onChange} />);

        const input = screen.getByTestId('Input.input');
        fireEvent.change(input, { target: { value: 'Hello' } });

        expect(onChange).toHaveBeenCalledTimes(1);
        waitFor(() => {
            expect(input).toContainHTML('Hello');
        });
        screen.debug();
    });

    test('Autofocus input', () => {
        render(<Input id="input" autofocus />);
        expect(screen.getByTestId('Input.input')).toHaveFocus();
        screen.debug();
    });

    test('Readonly input', () => {
        const onChange = jest.fn();
        render(
            <Input id="input" readonly onChange={onChange} value="Readonly" />,
        );

        const input: HTMLInputElement = screen.getByTestId('Input.input');
        expect(input).toHaveAttribute('readonly');
        expect(input).toContainHTML('Readonly');

        fireEvent.change(input, { target: { value: 'New Value' } });
        waitFor(() => {
            expect(onChange).not.toHaveBeenCalled();
        });
        screen.debug();
    });

    test('Input value is controlled', () => {
        const { rerender } = render(<Input id="input" value="Initial" />);
        expect(screen.getByTestId('Input.input')).toContainHTML('Initial');
        rerender(<Input id="input" value="Updated" />);
        expect(screen.getByTestId('Input.input')).toContainHTML('Updated');
        screen.debug();
    });
});
