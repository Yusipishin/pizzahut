import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductList.module.scss';
import { ProductItem } from '../ProductItem/ProductItem';
import { useProducts } from '../../api/productApi';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ProductListProps {
    className?: string;
    activeEndpoint: string;
}

export const ProductList = memo((props: ProductListProps) => {
    const { className, activeEndpoint } = props;
    const { data: products, isFetching } = useProducts(activeEndpoint);

    const skeletons = new Array(6)
        .fill(0)
        .map((_, i) => (
            <Skeleton height={220} className={cls.skeleton} key={i} />
        ));

    return (
        <div className={classNames(cls.ProductList, {}, [className])}>
            {isFetching
                ? skeletons
                : products?.map((item) => (
                      <ProductItem key={item.id} item={item} />
                  ))}
        </div>
    );
});
