import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { Container } from '../Container';

interface HeaderProps {
    children: ReactNode;
    outline?: boolean;
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className, children, outline } = props;

    return (
        <header
            className={classNames(cls.Header, { [cls.outline]: outline }, [
                className,
            ])}
        >
            <Container className={cls.HeaderWrapper}>{children}</Container>
        </header>
    );
});
