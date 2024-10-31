import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollByPath } from './scrollbarSelectors';

const state: DeepPartial<StateSchema> = {
    scrollbar: {
        scroll: {
            '/home': 100,
            '/about': 200,
        },
    },
};

describe('features/Scrollbar/scrollbarSelectors.test', () => {
    test('Return the scroll position for home path', () => {
        const scrollPosition = getScrollByPath(state as StateSchema, '/home');
        expect(scrollPosition).toBe(100);
    });

    test('Return the scroll position for about path', () => {
        const scrollPosition = getScrollByPath(state as StateSchema, '/about');
        expect(scrollPosition).toBe(200);
    });

    test('Return 0 for a non-existing path', () => {
        const scrollPosition = getScrollByPath(
            state as StateSchema,
            '/contact',
        );
        expect(scrollPosition).toBe(0);
    });

    test('Return 0 when the scrollbar state is empty', () => {
        const emptyState: DeepPartial<StateSchema> = {
            scrollbar: { scroll: {} },
        };
        const scrollPosition = getScrollByPath(
            emptyState as StateSchema,
            '/home',
        );
        expect(scrollPosition).toBe(0);
    });

    test('Return 0 when the scrollbar is undefined', () => {
        const undefinedState: DeepPartial<StateSchema> = {};
        const scrollPosition = getScrollByPath(
            undefinedState as StateSchema,
            '/home',
        );
        expect(scrollPosition).toBe(0);
    });
});
