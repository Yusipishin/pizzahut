import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import cls from './PageError.module.scss';
import { Text } from '@/shared/ui/Text';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <Text
                size="M"
                theme="error"
                align="center"
                className={cls.errorText}
                text={t('Произошла непредвиденная ошибка')}
            />
            <Button size="size_m" theme="outline" onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
