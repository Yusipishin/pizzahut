import type { Meta, StoryObj } from '@storybook/react';
import { ProductItem } from './ProductItem';
import { Pizza } from '../../model/types/product';

const pizzaData: Pizza = {
    id: '7',
    name: 'Цезарь',
    type: 'PIZZA',
    img: 'https://i.postimg.cc/P5WL0cHL/image.png',
    sale: {
        small: 429,
        average: 649,
        big: 769,
    },
    weight: {
        traditional: {
            small: 320,
            average: 480,
            big: 630,
        },
        thin: {
            average: 370,
            big: 550,
        },
    },
    ingredients: {
        fixed: [
            'Цыпленок',
            'Соевый соус',
            'Моцарелла',
            'Сыры чеддер и пармезан',
            'Салат Романо',
        ],
        optional: [],
        additional: [
            'Сырный бортик',
            'Шампиньоны',
            'Бекон',
            'Томаты',
            'Красный лук',
            'Сладкий перец',
        ],
    },
};

const meta: Meta<typeof ProductItem> = {
    component: ProductItem,
    title: 'entities/Product/ProductItem',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        item: pizzaData,
    },
};
