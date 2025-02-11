import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { AppImage } from '@/shared/ui/AppImage';
import { Header } from '@/shared/ui/Header/Header';
import { getRouteMain } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeaderMain.module.scss';
import Logo from '@/shared/assets/img/logo.png';
import CartIcon from '@/shared/assets/img/icons/cart-ic.svg?react';
import { getUserAuthData } from '@/entities/User';
import { UserDropdown } from '@/features/UserDropdown';
import { LoginModal } from '@/features/AuthByTelephone';

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

export const HeaderMain = memo(({ className }: HeaderMainProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const authBtn = authData ? (
        <UserDropdown />
    ) : (
        <>
            <Button
                theme="outline"
                radius="lRadius"
                onClick={onShowModal}
                className={cls.loginBtn}
            >
                <Text text={t('Войти')} />
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </>
    );

    return (
        <Header outline className={classNames('', {}, [className])}>
            <HStack gap="96">
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
            </HStack>
            <HStack gap="16">
                {authBtn}
                <Button
                    radius="lRadius"
                    className={cls.cartBtn}
                    theme="outlineAccent"
                >
                    <HStack gap="8">
                        <Icon Svg={CartIcon} />
                        <Text text={t('Корзина')} />
                    </HStack>
                    <Text
                        className={cls.count}
                        align="center"
                        size="XS"
                        text="4"
                    />
                </Button>
            </HStack>
        </Header>
    );
});
