import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'primary' | 'error' | 'accent' | 'secondary';
type TextAlign = 'left' | 'right' | 'center';
type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export enum TextSize {
    XS = 'size_xs',
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string | number;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string;
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.XS]: 'h4',
    [TextSize.S]: 'h5',
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
    [TextSize.XL]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = 'primary',
        align = 'left',
        size = TextSize.S,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const additional = [className, cls[theme], cls[align], cls[size]];

    return (
        <div
            data-testid={`${dataTestId}.div`}
            className={classNames(cls.Text, {}, additional)}
        >
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
