import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { AppImage } from '@/shared/ui/AppImage';
import { Header } from '@/shared/ui/Header/Header';
import { getRouteMain } from '@/shared/const/router';
import { PHONE_NUMBER } from '@/shared/const/telephone';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeaderMain.module.scss';
import Logo from '@/shared/assets/img/logo.png';
import DeliveryIcon from '@/shared/assets/img/icons/delivery-ic.svg?react';
import CallIcon from '@/shared/assets/img/icons/call-ic.svg?react';
import CartIcon from '@/shared/assets/img/icons/cart-ic.svg?react';

interface HeaderMainProps {
    className?: string;
}

const links: { label: string; route: string }[] = [
    { label: 'О нас', route: getRouteMain() },
    { label: 'Акции', route: getRouteMain() },
    { label: 'Отзывы', route: getRouteMain() },
    { label: 'Карьера', route: getRouteMain() },
    { label: 'Блог', route: getRouteMain() },
];

export const HeaderMain = memo((props: HeaderMainProps) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <Header outline className={classNames('', {}, [className])}>
            <AppLink to={getRouteMain()}>
                <AppImage alt={t('Логотип сайта PizzaHut')} src={Logo} />
            </AppLink>
            <nav>
                <ul className={cls.list}>
                    {links.map(({ label, route }) => (
                        <li key={label}>
                            <AppLink to={route}>
                                <Text text={t(label)} />
                            </AppLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <HStack className={cls.info} gap="8">
                <Icon Svg={DeliveryIcon} />
                <Text text={t('Доставка по Ухте')} />
            </HStack>
            <AppLink className={cls.callLink} to={`tel:${PHONE_NUMBER}`}>
                <HStack gap="8">
                    <Icon Svg={CallIcon} />
                    <Text text={PHONE_NUMBER} />
                </HStack>
            </AppLink>
            <Button className={cls.loginBtn} radius="lRadius" theme="outline">
                <Text text={t('Войти')} />
            </Button>
            <Button
                radius="lRadius"
                className={cls.cartBtn}
                theme="outlineAccent"
            >
                <HStack gap="8">
                    <Icon Svg={CartIcon} />
                    <Text text={t('Корзина')} />
                </HStack>
                <Text className={cls.count} align="center" size="XS" text="4" />
            </Button>
        </Header>
    );
});
