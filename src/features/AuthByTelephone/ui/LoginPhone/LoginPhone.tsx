import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cls from './LoginPhone.module.scss';

import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import {
    getLoginError,
    getLoginIsLoading,
    getLoginTelephone,
} from '../../model/selectors/loginSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginActions } from '../../model/slice/loginSlice';
import { formatPhoneNumber } from '@/shared/lib/formatPhoneNumber/formatPhoneNumber';
import { sendCode } from '../../model/services/sendCode/sendCode';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';

export interface LoginPhoneProps {
    className?: string;
    setIsVerifyModal: (isVerify: boolean) => void;
}

const LoginPhone = memo((props: LoginPhoneProps) => {
    const { className, setIsVerifyModal } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const telephone = useSelector(getLoginTelephone);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeTelephone = useCallback(
        (value: string) => {
            dispatch(loginActions.setTelephone(value));
        },
        [dispatch],
    );

    const onSendCode = useCallback(async () => {
        const formattedPhone = formatPhoneNumber(telephone);
        const result = await dispatch(sendCode({ telephone: formattedPhone }));
        if (result.meta.requestStatus === 'fulfilled') {
            setIsVerifyModal(true);
        }
    }, [dispatch, setIsVerifyModal, telephone]);

    return (
        <VStack className={className}>
            <Text size="L" className={cls.title} title={t('Вход на сайт')} />
            <Text
                className={cls.txt}
                text={t(
                    `Авторизуйтесь на сайте, чтобы получить доступ к уникальным предложениям, 
                        скидкам и возможностям`,
                )}
            />
            <Input
                autofocus
                phoneMask
                type="tel"
                id="telephone"
                value={telephone}
                className={cls.wrapper}
                label={t('Номер телефона')}
                onChange={onChangeTelephone}
            />
            {error && (
                <Text
                    theme="error"
                    className={cls.error}
                    text={t('Вы ввели некорректный номер телефона')}
                />
            )}
            <Button
                max
                // type="submit"
                theme="accent"
                radius="mRadius"
                onClick={onSendCode}
                disabled={isLoading}
            >
                {t('Получить код')}
            </Button>
            <VStack className={cls.agree} align="center">
                <Text size="XS" text={t('Продолжая, вы соглашаетесь')} />
                <AppLink to="/">
                    <Text
                        size="XS"
                        align="center"
                        theme="accent"
                        text={t(
                            'со сбором и обработкой персональных данных пользовательским соглашением',
                        )}
                    />
                </AppLink>
            </VStack>
        </VStack>
    );
});

export default LoginPhone;
