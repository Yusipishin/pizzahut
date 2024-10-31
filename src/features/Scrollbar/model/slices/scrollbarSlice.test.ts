import { ScrollbarSchema } from '../types/ScrollbarSchema';
import { scrollbarActions, scrollbarReducer } from './scrollbarSlice';

const initialState: ScrollbarSchema = {
    scroll: {},
};
const path1 = '/home';
const position1 = 100;
const path2 = '/about';
const position2 = 200;

describe('features/Scrollbar/scrollbarSlice.test', () => {
    test('Return the initial state', () => {
        expect(scrollbarReducer(undefined, { type: 'unknown' })).toEqual(
            initialState,
        );
    });

    test('Set scroll position for a home path', () => {
        const newState = scrollbarReducer(
            initialState,
            scrollbarActions.setScrollPosition({
                path: path1,
                position: position1,
            }),
        );
        expect(newState.scroll[path1]).toBe(position1);
    });

    test('Update scroll position for home path', () => {
        let state = scrollbarReducer(
            initialState,
            scrollbarActions.setScrollPosition({
                path: path1,
                position: position1,
            }),
        );
        state = scrollbarReducer(
            state,
            scrollbarActions.setScrollPosition({
                path: path1,
                position: position2,
            }),
        );

        expect(state.scroll[path1]).toBe(position2);
    });

    test('Set scroll position for multiple paths', () => {
        let state = scrollbarReducer(
            initialState,
            scrollbarActions.setScrollPosition({
                path: path1,
                position: position1,
            }),
        );
        state = scrollbarReducer(
            state,
            scrollbarActions.setScrollPosition({
                path: path2,
                position: position2,
            }),
        );

        expect(state.scroll[path1]).toBe(position1);
        expect(state.scroll[path2]).toBe(position2);
    });
});
