import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductList.module.scss';
import { ProductItem } from '../ProductItem/ProductItem';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import { Product } from '../../model/types/product';

interface ProductListProps {
    isLoading: boolean;
    items: Product[];
    className?: string;
}

export const ProductList = memo((props: ProductListProps) => {
    const { className, items = [], isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ProductList, {}, [className])}>
                {new Array(6).fill(0).map((_, i) => (
                    <Skeleton height={220} className={cls.skeleton} key={i} />
                ))}
            </div>
        );
    }

    if (!items || items.length === 0) {
        return (
            <div className={classNames(cls.ProductList, {}, [className])}>
                <Text
                    align="center"
                    size="XL"
                    theme="accent"
                    title={t('Извините, но в наличии ничего нет...')}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProductList, {}, [className])}>
            {items.map((item) => (
                <ProductItem key={item.id} item={item} />
            ))}
        </div>
    );
});
