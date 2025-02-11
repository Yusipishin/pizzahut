import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Dropdown } from '@/shared/ui/Popups';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import cls from './UserDropdown.module.scss';
import AvatarIcon from '@/shared/assets/img/icons/avatar-ic.svg?react';

interface UserDropdownProps {
    className?: string;
}

export const UserDropdown = memo((props: UserDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { firstname } = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={
                <Button
                    className={cls.userBtn}
                    radius="lRadius"
                    theme="outline"
                >
                    <HStack align="start" gap="8">
                        <Icon Svg={AvatarIcon} />
                        <Text text={firstname} />
                    </HStack>
                </Button>
            }
        />
    );
});
