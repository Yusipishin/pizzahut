import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardTheme = 'outline';

interface CardProps extends ButtonHTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = memo((props: CardProps) => {
    const { max = true, className, children, theme, ...otherProps } = props;

    return (
        <article
            className={classNames(cls.Card, { [cls.maxWidth]: max }, [
                className,
                cls[theme],
            ])}
            data-testid="Card.article"
            {...otherProps}
        >
            {children}
        </article>
    );
});
