import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import {
    getLoginCode,
    getLoginError,
    getLoginIsLoading,
    getLoginTelephone,
} from '../../model/selectors/loginSelectors';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { verifyCode } from '../../model/services/verifyCode/verifyCode';
import { sendCode } from '../../model/services/sendCode/sendCode';
import { formatPhoneNumber } from '@/shared/lib/formatPhoneNumber/formatPhoneNumber';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const [isVerifyModal, setIsVerifyModal] = useState(false);
    const dispatch = useAppDispatch();
    const telephone = useSelector(getLoginTelephone);
    const code = useSelector(getLoginCode);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeTelephone = useCallback(
        (value: string) => {
            dispatch(loginActions.setTelephone(value));
        },
        [dispatch],
    );

    const onChangeCode = useCallback(
        (value: number) => {
            dispatch(loginActions.setCode(value));
        },
        [dispatch],
    );

    const onSendCode = useCallback(async () => {
        const result = await dispatch(
            sendCode({ telephone: formatPhoneNumber(telephone) }),
        );
        if (result.meta.requestStatus === 'fulfilled') {
            setIsVerifyModal(true);
        }
    }, [dispatch, telephone]);

    const onVerifyCode = useCallback(async () => {
        const result = await dispatch(
            verifyCode({ telephone: formatPhoneNumber(telephone), code }),
        );
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [code, dispatch, onSuccess, telephone]);

    if (isVerifyModal) {
        return (
            <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
                {/* <form onSubmit={handleSubmit(onVerifyCode)}> */}
                <VStack className={className}>
                    <Text
                        size="L"
                        className={cls.title}
                        title={t('Вход на сайт')}
                    />
                    <Text
                        text={t(
                            `Код отправлен сообщением на номер ${telephone}`,
                        )}
                    />
                    <Button>
                        <Text theme="accent" text={t('Изменить')} />
                    </Button>
                    <HStack max justify="center">
                        <Input autofocus id="code-1" square pattern="[0-9]*" />
                        <Input
                            maxLength={1}
                            id="code-2"
                            square
                            pattern="[0-9]*"
                        />
                        <Input
                            maxLength={1}
                            id="code-3"
                            square
                            pattern="[0-9]*"
                        />
                        <Input
                            maxLength={1}
                            id="code-4"
                            square
                            pattern="[0-9]*"
                        />
                    </HStack>
                    <Text
                        theme="secondary"
                        className={cls.error}
                        text={t('Проверьте код в СМС')}
                    />
                    <Button
                        max
                        // type="submit"
                        theme="accent"
                        radius="mRadius"
                        onClick={onVerifyCode}
                        disabled={isLoading}
                        className={cls.loginBtn}
                    >
                        {t('Получить новый код')}
                    </Button>
                    <VStack align="center">
                        <Text
                            size="XS"
                            text={t('Продолжая, вы соглашаетесь')}
                        />
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
                {/* </form> */}
            </DynamicModuleLoader>
        );
    }

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            {/* <form onSubmit={handleSubmit(onSendCode)}> */}
            <VStack className={className}>
                <Text
                    size="L"
                    className={cls.title}
                    title={t('Вход на сайт')}
                />
                <Text
                    text={t(
                        `Авторизуйтесь на сайте, чтобы получить доступ к уникальным предложениям, 
                        скидкам и возможности заказывать пиццу с доставкой прямо к вашему порогу!`,
                    )}
                />
                <Input
                    autofocus
                    phoneMask
                    type="tel"
                    id="telephone"
                    value={telephone}
                    className={cls.input}
                    label={t('Номер телефона')}
                    onChange={onChangeTelephone}
                />
                {error && (
                    <Text
                        theme="error"
                        className={cls.error}
                        text={t('Вы ввели неверный номер телефона')}
                    />
                )}
                <Button
                    max
                    // type="submit"
                    theme="accent"
                    radius="mRadius"
                    onClick={onSendCode}
                    disabled={isLoading}
                    className={cls.loginBtn}
                >
                    {t('Получить код')}
                </Button>
                <VStack align="center">
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
            {/* </form> */}
        </DynamicModuleLoader>
    );
});

export default LoginForm;
