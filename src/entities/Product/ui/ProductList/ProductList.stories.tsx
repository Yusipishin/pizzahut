import type { Meta, StoryObj } from '@storybook/react';
import { ProductList } from './ProductList';
import { Product } from '../../model/types/product';

const mockProducts: Product[] = [
    {
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
    },
    {
        id: '8',
        name: 'Маргарита',
        type: 'PIZZA',
        img: 'https://i.postimg.cc/9FqwY0NY/image.png',
        sale: {
            small: 319,
            average: 559,
            big: 689,
        },
        weight: {
            traditional: {
                small: 330,
                average: 470,
                big: 630,
            },
            thin: {
                average: 380,
                big: 500,
            },
        },
        ingredients: {
            fixed: [
                'Томатная паста',
                'Чеснок',
                'Базилик',
                'Моцарелла',
                'Черри помидоры',
            ],
            optional: [],
            additional: [
                'Сырный бортик',
                'Шампиньоны',
                'Бекон',
                'Ветчина',
                'Пепперони',
                'Маринованные огурчики',
                'Итальянские травы',
            ],
        },
    },
    {
        id: '9',
        name: 'Мексиканская',
        type: 'PIZZA',
        img: 'https://i.postimg.cc/jS0wgTp0/image.png',
        sale: {
            small: 539,
            average: 789,
            big: 939,
        },
        weight: {
            traditional: {
                small: 410,
                average: 570,
                big: 770,
            },
            thin: {
                average: 420,
                big: 680,
            },
        },
        ingredients: {
            fixed: [
                'Перец чили',
                'Томаты',
                'Кетчуп',
                'Салями',
                'Кукуруза',
                'Сыры чеддер и пармезан',
                'Каперсы',
                'Оливковое масло',
            ],
            optional: ['Креветки'],
            additional: [
                'Сырный бортик',
                'Моцарелла',
                'Итальянские травы',
                'Сладкий перец',
                'Кубики брынзы',
                'Митболы',
            ],
        },
    },
    {
        id: '10',
        name: 'Пепперони',
        type: 'PIZZA',
        img: 'https://i.postimg.cc/yN7JKP6L/image.png',
        sale: {
            small: 539,
            average: 789,
            big: 939,
        },
        weight: {
            traditional: {
                small: 420,
                average: 610,
                big: 840,
            },
            thin: {
                average: 520,
                big: 720,
            },
        },
        ingredients: {
            fixed: [
                'Моцарелла',
                'Сырокопченая колбаса',
                'Томаты',
                'Кетчуп',
                'Томатная паста',
                'Чеснок',
                'Паприка',
            ],
            optional: ['Оливковое масло', 'Сыры чеддер и пармезан'],
            additional: [
                'Сырный бортик',
                'Шампиньоны',
                'Бекон',
                'Ветчина',
                'Пепперони',
                'Маринованные огурчики',
                'Митболы',
            ],
        },
    },
    {
        id: '11',
        name: 'Цыпленок барбекю',
        type: 'PIZZA',
        img: 'https://i.postimg.cc/fb5VR9JD/image.png',
        sale: {
            small: 589,
            average: 899,
            big: 999,
        },
        weight: {
            traditional: {
                small: 390,
                average: 630,
                big: 800,
            },
            thin: {
                average: 490,
                big: 710,
            },
        },
        ingredients: {
            fixed: [
                'Орегано',
                'Бекон',
                'Красный лук',
                'Чеснок',
                'Базилик',
                'Лук репчатый',
                'Томаты',
            ],
            optional: [],
            additional: [
                'Сырный бортик',
                'Ананасы',
                'Итальянские травы',
                'Сладкий перец',
                'Кубики брынзы',
                'Митболы',
            ],
        },
    },
];

const meta: Meta<typeof ProductList> = {
    component: ProductList,
    title: 'entities/Product/ProductList',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {
    args: {
        isLoading: true,
        items: [],
    },
};

export const Primary: Story = {
    args: {
        isLoading: false,
        items: mockProducts,
    },
};

export const Empty: Story = {
    args: {
        isLoading: false,
        items: [],
    },
};
