import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button';

const items = [
    { content: 'Item 1', onClick: jest.fn() },
    { content: 'Item 2', onClick: jest.fn() },
    { content: 'Item 3', href: '/item3' },
];

describe('shared/ui/Popups/Dropdown.test', () => {
    test('Render', () => {
        render(<Dropdown items={items} trigger={<Button />} />);
        expect(screen.getByTestId('Dropdown.Menu')).toBeInTheDocument();
        expect(
            screen.getByTestId('Dropdown.ButtonTrigger'),
        ).toBeInTheDocument();
        screen.debug();
    });

    test('Apply custom className', () => {
        render(
            <Dropdown
                className="customClass"
                items={items}
                trigger={<Button />}
            />,
        );
        expect(screen.getByTestId('Dropdown.Menu')).toHaveClass('customClass');
        screen.debug();
    });

    test('Opens dropdown menu on trigger click', () => {
        render(<Dropdown items={items} trigger={<Button />} />);

        waitFor(() => {
            fireEvent.click(screen.getByTestId('Dropdown.ButtonTrigger'));

            expect(screen.getByText('Item 1')).toBeInTheDocument();
            expect(screen.getByText('Item 2')).toBeInTheDocument();
            expect(screen.getByText('Item 3')).toBeInTheDocument();
        });

        screen.debug();
    });

    test('Calls onClick when dropdown item is clicked', () => {
        const onClick = jest.fn();
        const item = { content: 'Item 1', onClick };

        render(<Dropdown items={[item]} trigger={<Button />} />);

        fireEvent.click(screen.getByTestId('Dropdown.ButtonTrigger'));
        fireEvent.click(screen.getByText(item.content));

        expect(onClick).toHaveBeenCalled();
        expect(onClick).toHaveBeenCalledTimes(1);
        screen.debug();
    });

    test('Renders link item correctly', () => {
        render(<Dropdown items={items} trigger={<Button />} />);

        waitFor(() => {
            fireEvent.click(screen.getByTestId('Dropdown.ButtonTrigger'));

            expect(screen.getByText('Item 3')).toBeInTheDocument();
            expect(screen.getByText('Item 3')).toHaveAttribute(
                'href',
                '/item3',
            );
        });

        screen.debug();
    });

    test('Does not call onClick for disabled items', () => {
        const onClick = jest.fn();
        const item = {
            content: 'Item 1',
            onClick,
            disabled: true,
        };

        render(<Dropdown items={[item]} trigger={<Button />} />);

        fireEvent.click(screen.getByTestId('Dropdown.ButtonTrigger'));
        fireEvent.click(screen.getByText('Item 1'));

        expect(onClick).not.toHaveBeenCalled();
        screen.debug();
    });
});
