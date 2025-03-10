import { ReactNode, useEffect } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '../../lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import CloseIcon from '../../assets/img/icons/close-ic.svg?react';
import { Icon } from '../Icon';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
    small?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy, small } = props;

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    useEffect(() => {
        document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [isOpen]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal container={document.querySelector('.app') ?? document.body}>
            <div
                data-testid="Modal.div"
                className={classNames(cls.Modal, mods, [className])}
            >
                <Overlay data-testid="Modal.Overlay" onClick={close} />
                <div
                    className={classNames(cls.content, {
                        [cls.smallContent]: small,
                    })}
                >
                    {children}
                    <Icon
                        Svg={CloseIcon}
                        onClick={close}
                        data-testid="Modal.IconClose"
                        className={cls.closeIcon}
                    />
                </div>
            </div>
        </Portal>
    );
};
