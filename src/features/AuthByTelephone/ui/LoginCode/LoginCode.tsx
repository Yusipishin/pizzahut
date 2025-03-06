import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cls from './LoginCode.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';

import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { formatPhoneNumber } from '@/shared/lib/formatPhoneNumber/formatPhoneNumber';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getLoginCode,
    getLoginError,
    getLoginIsLoading,
    getLoginTelephone,
} from '../../model/selectors/loginSelectors';
import { verifyCode } from '../../model/services/verifyCode/verifyCode';
import { loginActions } from '../../model/slice/loginSlice';
import { AppLink } from '@/shared/ui/AppLink';
import { sendCode } from '../../model/services/sendCode/sendCode';

export interface LoginCodeProps {
    className?: string;
    onSuccess: () => void;
    setIsVerifyModal: (isVerify: boolean) => void;
}

const LoginCode = memo((props: LoginCodeProps) => {
    const { className, onSuccess, setIsVerifyModal } = props;
    const { t } = useTranslation();
    const [timer, setTimer] = useState(30);
    const dispatch = useAppDispatch();
    const code = useSelector(getLoginCode);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const telephone = useSelector(getLoginTelephone);

    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const onVerifyCode = useCallback(
        async (newCode: string[]) => {
            const formattedPhone = formatPhoneNumber(telephone);
            const result = await dispatch(
                verifyCode({
                    telephone: formattedPhone,
                    code: Number(newCode.join('')),
                }),
            );
            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess();
            }
        },
        [dispatch, onSuccess, telephone],
    );

    const handleInputChange = (index: number, value: string) => {
        const newCode = [...code];
        newCode[index] = value;
        dispatch(loginActions.setCode(newCode));

        if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
        } else {
            inputRefs[index].current?.blur();
            onVerifyCode(newCode);
        }
    };

    const onSendCode = useCallback(async () => {
        const formattedPhone = formatPhoneNumber(telephone);
        await dispatch(sendCode({ telephone: formattedPhone }));
        setTimer(30);
        dispatch(loginActions.setCode(['', '', '', '']));
    }, [dispatch, telephone]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        if (timer === 0) {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [timer]);

    return (
        <VStack className={className}>
            <Text className={cls.title} size="L" title={t('Вход на сайт')} />
            <Text text={t(`Код отправлен сообщением на номер:`)} />
            <HStack gap="8">
                <Text text={telephone} />
                <Button onClick={() => setIsVerifyModal(false)}>
                    <Text theme="accent" text={t('[Изменить]')} />
                </Button>
            </HStack>
            <VStack max justify="center" gap="16" className={cls.wrapper}>
                <HStack max justify="center">
                    {inputRefs.map((ref, index) => (
                        <Input
                            square
                            key={index}
                            newRef={ref}
                            error={error}
                            maxLength={1}
                            value={code[index]}
                            pattern="[0-9]*"
                            id={`code-${index}`}
                            onFocus={(e) => e.target.select()}
                            onChange={(value) =>
                                handleInputChange(index, value)
                            }
                        />
                    ))}
                </HStack>
                <Text
                    align="center"
                    theme="secondary"
                    className={cls.txtCheck}
                    text={t('Проверьте код в СМС')}
                />
            </VStack>
            <Button
                max
                theme="accent"
                radius="mRadius"
                disabled={isLoading || timer > 0}
                onClick={onSendCode}
            >
                {timer > 0
                    ? t('Отправить снова через {{seconds}}', { seconds: timer })
                    : t('Получить новый код')}
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

export default LoginCode;
