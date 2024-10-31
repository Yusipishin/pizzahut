import { render, screen, fireEvent } from '@testing-library/react';
import { Popover } from './Popover';
import { Button } from '../../../Button';

describe('shared/ui/Popups/Popover.test', () => {
    const trigger = <Button />;
    const content = <div>PopoverContent</div>;

    test('Render', () => {
        render(<Popover trigger={trigger}>{content}</Popover>);
        expect(screen.getByTestId('Popover')).toBeInTheDocument();
        screen.debug();
    });

    test('Apply custom className', () => {
        render(
            <Popover className="customClass" trigger={trigger}>
                {content}
            </Popover>,
        );
        expect(screen.getByTestId('Popover')).toHaveClass('customClass');
        screen.debug();
    });

    test('Opens popover on trigger click', () => {
        render(<Popover trigger={trigger}>{content}</Popover>);

        fireEvent.click(screen.getByTestId('Popover.ButtonTrigger'));

        expect(screen.getByText('PopoverContent')).toBeInTheDocument();
        screen.debug();
    });

    test('Closes popover when clicked outside', () => {
        render(<Popover trigger={trigger}>{content}</Popover>);

        fireEvent.click(screen.getByTestId('Popover.ButtonTrigger'));
        expect(screen.getByText('PopoverContent')).toBeInTheDocument();

        fireEvent.click(document.body);

        expect(screen.queryByText('PopoverContent'));
        screen.debug();
    });

    test('Closes popover when trigger is clicked again', () => {
        render(<Popover trigger={trigger}>{content}</Popover>);

        fireEvent.click(screen.getByTestId('Popover.ButtonTrigger'));
        expect(screen.getByText('PopoverContent')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('Popover.ButtonTrigger'));

        expect(screen.queryByText('PopoverContent'));
        screen.debug();
    });

    test('Popover is positioned correctly based on direction', () => {
        render(
            <Popover trigger={trigger} direction="top left">
                {content}
            </Popover>,
        );

        fireEvent.click(screen.getByTestId('Popover.ButtonTrigger'));

        expect(screen.getByTestId('Popover.Panel')).toHaveClass(
            'optionsTopLeft',
        );
        screen.debug();
    });
});
