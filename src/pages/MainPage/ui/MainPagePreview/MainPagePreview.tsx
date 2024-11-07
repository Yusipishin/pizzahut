import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Container } from '@/shared/ui/Container';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppImage } from '@/shared/ui/AppImage';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import PlayIcon from '@/shared/assets/img/icons/play-ic.svg?react';
import PreviewPizza from '@/shared/assets/img/preview-pizza.png';
import cls from './MainPagePreview.module.scss';

interface MainPagePreviewProps {
    className?: string;
}

export const MainPagePreview = memo((props: MainPagePreviewProps) => {
    const { t } = useTranslation('main');
    const { className } = props;

    return (
        <Container Tag="section">
            <HStack
                justify="between"
                className={classNames(cls.MainPagePreview, {}, [className])}
            >
                <VStack>
                    <Text size="XL" text={t('preview.title')} />
                    <Text
                        size="M"
                        theme="secondary"
                        className={cls.text}
                        text={t('preview.text')}
                    />
                    <HStack gap="32">
                        <Button
                            className={cls.orderBtn}
                            size="size_s"
                            radius="mRadius"
                            theme="accent"
                        >
                            {t('preview.makeOrder')}
                        </Button>
                        <div className={cls.stick} />
                        <Button>
                            <HStack gap="16">
                                <Icon Svg={PlayIcon} />
                                <Text
                                    theme="secondary"
                                    className={cls.playText}
                                    text={t('preview.video')}
                                />
                            </HStack>
                        </Button>
                    </HStack>
                </VStack>
                <AppImage
                    src={PreviewPizza}
                    className={cls.img}
                    alt={t('preview.img.alt')}
                />
            </HStack>
        </Container>
    );
});
