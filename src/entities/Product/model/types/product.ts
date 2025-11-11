export type ProductType = 'SAUCE' | 'SNACK' | 'DRINK' | 'DESSERT' | 'PIZZA';

export interface Dough {
    small?: number;
    average: number;
    big: number;
}

interface ProductBase {
    id: string;
    name: string;
    type: ProductType;
    img: string;
    sale: number | Dough;
    description?: string;
}

interface Sauce extends ProductBase {}

interface Snack extends ProductBase {
    weight: number;
    portion: string;
}

interface Drink extends ProductBase {
    count: string;
}

interface Dessert extends ProductBase {
    weight: number;
    count: number;
}

export interface Pizza extends ProductBase {
    weight: {
        traditional: Dough;
        thin: Dough;
    };
    ingredients: {
        fixed: string[];
        optional: string[];
        additional: string[];
    };
}

export type Product = Sauce | Snack | Drink | Dessert | Pizza;
