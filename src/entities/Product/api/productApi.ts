import { rtkApi } from '@/shared/api/rtkApi';
import { Product } from '../model/types/product';

const productApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<Product[], string>({
            query: (endpoint) => ({
                url: `/${endpoint}`,
            }),
        }),
    }),
});

export const useProducts = productApi.useGetProductsQuery;
