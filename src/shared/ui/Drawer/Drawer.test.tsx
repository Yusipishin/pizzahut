import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Drawer } from './Drawer';

describe('shared/ui/Drawer.test', () => {
    test('Render', () => {
        render(<Drawer>DrawerTest</Drawer>);
        waitFor(() => {
            expect(screen.getByTestId('Drawer.div')).toBeInTheDocument();
        });
        screen.debug();
    });

    test('Not render with isOpen false', () => {
        render(<Drawer isOpen={false}>DrawerTest</Drawer>);
        waitFor(() => {
            expect(screen.queryByTestId('Drawer.div'));
        });
        screen.debug();
    });

    test('Apply custom className', () => {
        render(<Drawer className="customClass">DrawerTest</Drawer>);
        waitFor(() => {
            expect(screen.getByTestId('Drawer.div')).toHaveClass('customClass');
        });
        screen.debug();
    });

    test('Have height 100px', () => {
        render(<Drawer>DrawerTest</Drawer>);
        waitFor(() => {
            expect(screen.getByTestId('Drawer.div')).toHaveStyle({
                height: '100px',
            });
        });
        screen.debug();
    });

    test('Close drawer when overlay is clicked', () => {
        const onClose = jest.fn();
        render(
            <Drawer isOpen onClose={onClose}>
                DrawerTest
            </Drawer>,
        );
        waitFor(() => {
            fireEvent.click(screen.getByTestId('Drawer.Overlay'));
            expect(screen.getByTestId('Drawer.div')).toHaveAttribute(
                'isOpen',
                false,
            );
            expect(onClose).toHaveBeenCalled();
        });
        screen.debug();
    });
});
