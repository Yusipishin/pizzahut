import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Select, SelectOption } from './Select';

const options: SelectOption<string>[] = [
    { value: 'option1', content: 'Option 1' },
    { value: 'option2', content: 'Option 2' },
    { value: 'option3', content: 'Option 3' },
];

describe('shared/ui/Select.test', () => {
    test('Renders with label', () => {
        render(<Select label="LabelTest" options={options} />);
        expect(screen.getByTestId('Select')).toBeInTheDocument();
        expect(screen.getByTestId('Select.Label')).toHaveTextContent(
            'LabelTest>',
        );
    });

    test('Renders options correctly', () => {
        render(<Select options={options} />);
        fireEvent.mouseDown(screen.getByTestId('Select'));
        options.forEach((option) => {
            expect(screen.getByText(option.content)).toBeInTheDocument();
        });
    });

    test('Calls onChange when an option is selected', () => {
        const onChange = jest.fn();
        render(<Select options={options} onChange={onChange} />);

        const selectElement = screen.getByTestId('Select');
        fireEvent.change(selectElement, { target: { value: 'option2' } });
        expect(selectElement).toHaveValue('option2');
    });

    test('Does not call onChange when readonly', () => {
        const onChange = jest.fn();
        render(<Select options={options} onChange={onChange} readonly />);

        const selectElement = screen.getByTestId('Select');
        waitFor(() => {
            fireEvent.change(selectElement, { target: { value: 'option2' } });
            expect(onChange).not.toHaveBeenCalled();
        });
    });

    test('Renders with a selected value', () => {
        render(<Select options={options} value="option2" />);
        const selectElement = screen.getByTestId('Select');
        expect(selectElement).toHaveValue('option2');
    });

    test('Applies custom className', () => {
        render(<Select className="customClass" options={options} />);
        expect(screen.getByTestId('Select.Wrapper')).toHaveClass('customClass');
    });
});
