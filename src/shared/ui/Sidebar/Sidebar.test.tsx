import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Sidebar } from './Sidebar';

const onClose = jest.fn();

describe('shared/ui/Sidebar.test', () => {
    test('Render', () => {
        render(
            <Sidebar isOpen onClose={onClose}>
                SidebarTest
            </Sidebar>,
        );
        expect(screen.getByTestId('Sidebar.div')).toBeInTheDocument();
        expect(screen.getByText('SidebarTest')).toBeInTheDocument();
        screen.debug();
    });

    test('Apply custom className', () => {
        render(
            <Sidebar className="customClass" isOpen onClose={onClose}>
                SidebarTest
            </Sidebar>,
        );
        expect(screen.getByTestId('Sidebar.div')).toHaveClass('customClass');
        screen.debug();
    });

    test('Close sidebar when overlay is clicked', () => {
        render(
            <Sidebar isOpen onClose={onClose}>
                SidebarTest
            </Sidebar>,
        );
        waitFor(() => {
            fireEvent.click(screen.getByTestId('Sidebar.Overlay'));
            expect(onClose).toHaveBeenCalled();
        });
        screen.debug();
    });

    test('Close sidebar when close icon is clicked', () => {
        render(
            <Sidebar isOpen onClose={onClose}>
                SidebarTest
            </Sidebar>,
        );

        waitFor(() => {
            fireEvent.click(screen.getByTestId('Sidebar.IconClose'));
            expect(onClose).toHaveBeenCalled();
        });
        screen.debug();
    });

    test('Sidebar does not render when isOpen is false', () => {
        render(
            <Sidebar isOpen={false} onClose={onClose}>
                SidebarTest
            </Sidebar>,
        );
        waitFor(() => {
            expect(screen.queryByTestId('Sidebar.div'));
        });
        screen.debug();
    });

    test('Body overflow is hidden when sidebar is open', () => {
        render(
            <Sidebar isOpen onClose={onClose}>
                SidebarTest
            </Sidebar>,
        );
        expect(document.body.style.overflowY).toBe('hidden');
        screen.debug();
    });

    test('Body overflow is auto when sidebar is closed', () => {
        const { rerender } = render(
            <Sidebar isOpen={false} onClose={onClose}>
                SidebarTest
            </Sidebar>,
        );
        expect(document.body.style.overflowY).toBe('auto');

        rerender(
            <Sidebar isOpen onClose={onClose}>
                SidebarTest
            </Sidebar>,
        );
        expect(document.body.style.overflowY).toBe('hidden');
        screen.debug();
    });

    test('Lazy loading of sidebar', () => {
        render(
            <Sidebar lazy isOpen onClose={onClose}>
                SidebarTest
            </Sidebar>,
        );
        expect(screen.getByTestId('Sidebar.div')).toBeInTheDocument();
        screen.debug();
    });
});
