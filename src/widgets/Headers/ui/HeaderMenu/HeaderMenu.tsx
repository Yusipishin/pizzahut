import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeaderMenu.module.scss';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

interface HeaderMenuProps {
    className?: string;
    activeEndpoint?: string;
    handleClick: (endpoint: string) => void;
}

const links: { label: string; endpoint: string }[] = [
    { label: 'Пицца', endpoint: 'pizza' },
    { label: 'Напитки', endpoint: 'drink' },
    { label: 'Соусы', endpoint: 'sauce' },
    { label: 'Закуски', endpoint: 'snack' },
    { label: 'Десерты', endpoint: 'dessert' },
];

export const HeaderMenu = memo((props: HeaderMenuProps) => {
    const { t } = useTranslation();
    const { className, handleClick, activeEndpoint } = props;

    return (
        <HStack justify="between" className={classNames('', {}, [className])}>
            <Text size="L" title={t('Меню')} />
            <ul className={cls.list}>
                {links.map(({ label, endpoint }) => (
                    <li key={label}>
                        <Button onClick={() => handleClick(endpoint)}>
                            <Text
                                theme={
                                    activeEndpoint === endpoint
                                        ? 'accent'
                                        : 'primary'
                                }
                                size="M"
                                text={t(label)}
                            />
                        </Button>
                    </li>
                ))}
            </ul>
        </HStack>
    );
});
