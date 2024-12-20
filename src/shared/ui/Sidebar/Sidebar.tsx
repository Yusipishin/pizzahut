import { memo, ReactNode, useEffect } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay';
import { Icon } from '../Icon';
import CloseIcon from '../../assets/img/icons/close-ic.svg?react';

interface SidebarProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Sidebar = memo((props: SidebarProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

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
                data-testid="Sidebar.div"
                className={classNames(cls.Sidebar, mods, [className])}
            >
                <Overlay data-testid="Sidebar.Overlay" onClick={close} />
                <aside className={cls.content}>
                    <div className={isClosing ? cls.hideContent : null}>
                        {children}
                    </div>
                    <Icon
                        Svg={CloseIcon}
                        onClick={close}
                        data-testid="Sidebar.IconClose"
                        className={cls.closeIcon}
                    />
                </aside>
            </div>
        </Portal>
    );
});
