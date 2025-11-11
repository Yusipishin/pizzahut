import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { HStack } from '../Stack';

type TextSize = 'XS' | 'S' | 'M' | 'L' | 'XL';
type TextTheme = 'primary' | 'error' | 'accent' | 'secondary';
type TextAlign = 'left' | 'right' | 'center';
type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

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
    XS: 'h4',
    S: 'h5',
    M: 'h3',
    L: 'h2',
    XL: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = 'primary',
        align = 'left',
        size = 'S',
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const additional = [className, cls[theme], cls[align], cls[size]];

    return (
        <div
            data-testid={`${dataTestId}.div`}
            className={classNames(cls.Text, {}, additional)}
        >
            <HStack>
                {HeaderTag === 'h2' && title && (
                    <div className={cls.leftLine} />
                )}
                {title && (
                    <HeaderTag
                        className={cls.title}
                        data-testid={`${dataTestId}.Header`}
                    >
                        {title}
                    </HeaderTag>
                )}
                {HeaderTag === 'h2' && title && (
                    <div className={cls.rightLine} />
                )}
            </HStack>
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
