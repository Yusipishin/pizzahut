import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ListBox } from './ListBox';

const items = [
    { value: '1', content: 'Item 1' },
    { value: '2', content: 'Item 2', disabled: false },
    { value: '3', content: 'Item 3', disabled: true },
];

describe('shared/ui/Popups/ListBox.test', () => {
    test('Render', () => {
        render(<ListBox items={items} onChange={() => {}} />);
        expect(screen.getByTestId('ListBox')).toBeInTheDocument();
        expect(screen.getByTestId('ListBox.ButtonTrigger')).toBeInTheDocument();
        screen.debug();
    });

    test('Apply custom className', () => {
        render(
            <ListBox
                items={items}
                className="customClass"
                onChange={() => {}}
            />,
        );
        expect(screen.getByTestId('ListBox')).toHaveClass('customClass');
        screen.debug();
    });

    test('Displays default value when no value is selected', () => {
        render(
            <ListBox
                items={items}
                defaultValue="Select an item"
                onChange={() => {}}
            />,
        );
        expect(screen.getByTestId('ListBox.ButtonTrigger')).toHaveTextContent(
            'Select an item',
        );
        screen.debug();
    });

    test('Calls onChange when an item is selected', () => {
        const onChange = jest.fn();
        render(<ListBox items={items} onChange={onChange} />);

        waitFor(() => {
            fireEvent.click(screen.getByTestId('ListBox.ButtonTrigger'));
            fireEvent.click(screen.getByText('Item 1'));

            expect(onChange).toHaveBeenCalledWith('1');
            expect(
                screen.getByTestId('ListBox.ButtonTrigger'),
            ).toHaveTextContent('Item 1');
        });

        screen.debug();
    });

    test('Does not call onChange for disabled items', () => {
        const onChange = jest.fn();
        render(<ListBox items={items} onChange={onChange} />);

        fireEvent.click(screen.getByTestId('ListBox.ButtonTrigger'));
        fireEvent.click(screen.getByText('Item 3'));

        expect(onChange).not.toHaveBeenCalled();
        screen.debug();
    });

    test('Displays selected item with a checkmark', () => {
        const onChange = jest.fn();
        render(<ListBox items={items} onChange={onChange} value="1" />);

        waitFor(() => {
            fireEvent.click(screen.getByTestId('ListBox.ButtonTrigger'));

            expect(screen.getByText('Item 1')).toBeInTheDocument();
            expect(screen.getByText('Item 1')).toContainHTML('✔');
        });

        screen.debug();
    });

    test('Displays label when provided', () => {
        render(
            <ListBox
                items={items}
                label="Choose an item:"
                onChange={() => {}}
            />,
        );
        waitFor(() => {
            expect(screen.getByText('Choose an item:')).toBeInTheDocument();
        });
        screen.debug();
    });
});
