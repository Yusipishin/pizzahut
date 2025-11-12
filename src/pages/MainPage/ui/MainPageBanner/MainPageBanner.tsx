import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPageBanner.module.scss';
import { AppImage } from '@/shared/ui/AppImage';
import imgPath from '@/shared/assets/img/banner.jpg';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Container } from '@/shared/ui/Container';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteMain } from '@/shared/const/router';

interface MainPageBannerProps {
    className?: string;
}

const fallback = <Skeleton className={cls.MainPageBanner} />;

export const MainPageBanner = memo((props: MainPageBannerProps) => {
    const { className } = props;

    return (
        <Container Tag="section">
            <AppLink to={getRouteMain()}>
                <AppImage
                    src={imgPath}
                    fallback={fallback}
                    className={classNames(cls.MainPageBanner, {}, [className])}
                />
            </AppLink>
        </Container>
    );
});
