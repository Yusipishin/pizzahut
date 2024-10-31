import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Modal } from './Modal';

const onClose = jest.fn();

describe('shared/ui/Modal.test', () => {
    test('Render', () => {
        render(
            <Modal isOpen onClose={onClose}>
                ModalTest
            </Modal>,
        );
        expect(screen.getByTestId('Modal.div')).toBeInTheDocument();
        expect(screen.getByText('ModalTest')).toBeInTheDocument();
        screen.debug();
    });

    test('Apply custom className', () => {
        render(
            <Modal className="customClass" isOpen onClose={onClose}>
                ModalTest
            </Modal>,
        );
        expect(screen.getByTestId('Modal.div')).toHaveClass('customClass');
        screen.debug();
    });

    test('Close modal when overlay is clicked', () => {
        render(
            <Modal isOpen onClose={onClose}>
                ModalTest
            </Modal>,
        );
        waitFor(() => {
            fireEvent.click(screen.getByTestId('Modal.Overlay'));
            expect(onClose).toHaveBeenCalled();
        });
        screen.debug();
    });

    test('Close modal when close icon is clicked', () => {
        render(
            <Modal isOpen onClose={onClose}>
                ModalTest
            </Modal>,
        );

        waitFor(() => {
            fireEvent.click(screen.getByTestId('Modal.IconClose'));
            expect(onClose).toHaveBeenCalled();
        });
        screen.debug();
    });

    test('Modal does not render when isOpen is false', () => {
        render(
            <Modal isOpen={false} onClose={onClose}>
                ModalTest
            </Modal>,
        );
        waitFor(() => {
            expect(screen.queryByTestId('Modal.div'));
        });
        screen.debug();
    });

    test('Body overflow is hidden when modal is open', () => {
        render(
            <Modal isOpen onClose={onClose}>
                ModalTest
            </Modal>,
        );
        expect(document.body.style.overflowY).toBe('hidden');
        screen.debug();
    });

    test('Body overflow is auto when modal is closed', () => {
        const { rerender } = render(
            <Modal isOpen={false} onClose={onClose}>
                ModalTest
            </Modal>,
        );
        expect(document.body.style.overflowY).toBe('auto');

        rerender(
            <Modal isOpen onClose={onClose}>
                ModalTest
            </Modal>,
        );
        expect(document.body.style.overflowY).toBe('hidden');
        screen.debug();
    });

    test('Lazy loading of modal', () => {
        render(
            <Modal lazy isOpen onClose={onClose}>
                ModalTest
            </Modal>,
        );
        expect(screen.getByTestId('Modal.div')).toBeInTheDocument();
        screen.debug();
    });
});
