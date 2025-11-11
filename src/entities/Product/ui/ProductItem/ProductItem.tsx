import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProductItem.module.scss';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppImage } from '@/shared/ui/AppImage';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Dough, Pizza, Product } from '../../model/types/product';

interface ProductItemProps {
    className?: string;
    item: Product;
}

export const ProductItem = memo((props: ProductItemProps) => {
    const { t } = useTranslation();
    const { className, item } = props;
    const { img, name, description, sale } = item;

    const saleText = item.type !== 'PIZZA' ? sale : (sale as Dough).average;
    const descriptionText =
        item.type !== 'PIZZA'
            ? description
            : (item as Pizza).ingredients.fixed.join(', ');

    return (
        <Card className={classNames(cls.ProductItem, {}, [className])}>
            <HStack className={cls.wrapper}>
                <AppImage className={cls.img} src={img} />
                <VStack className={cls.inner} justify="between" max>
                    <Text size="M" title={name} />
                    <Text className={cls.txt} size="S" text={descriptionText} />
                    <HStack max justify="between">
                        <Button className={cls.btn} theme="outline">
                            {t('Выбрать')}
                        </Button>
                        <Text size="L" text={`${saleText} ₽`} />
                    </HStack>
                </VStack>
            </HStack>
        </Card>
    );
});
