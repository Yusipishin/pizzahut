import { classNames } from './classNames';

describe('shared/lib/classNames.test', () => {
    test('With only first param', () => {
        expect(classNames('baseClass')).toBe('baseClass');
    });

    test('With mods', () => {
        const expected = 'baseClass hovered scrollable';
        expect(
            classNames('baseClass', { hovered: true, scrollable: true }),
        ).toBe(expected);
    });

    test('With empty additional classes', () => {
        const expected = 'baseClass';
        expect(classNames('baseClass', {}, [])).toBe(expected);
    });

    test('With additional classes', () => {
        const expected = 'baseClass addClass1 addClass2';
        expect(classNames('baseClass', {}, ['addClass1', 'addClass2'])).toBe(
            expected,
        );
    });

    test('With mods and additional classes', () => {
        const expected = 'baseClass addClass1 addClass2 hovered scrollable';
        expect(
            classNames('baseClass', { hovered: true, scrollable: true }, [
                'addClass1',
                'addClass2',
            ]),
        ).toBe(expected);
    });

    test('With mods false', () => {
        const expected = 'baseClass addClass1 addClass2 scrollable';
        expect(
            classNames('baseClass', { hovered: false, scrollable: true }, [
                'addClass1',
                'addClass2',
            ]),
        ).toBe(expected);
    });

    test('With mods undefined', () => {
        const expected = 'baseClass addClass1 addClass2 hovered';
        expect(
            classNames('baseClass', { hovered: true, scrollable: undefined }, [
                'addClass1',
                'addClass2',
            ]),
        ).toBe(expected);
    });

    test('With empty base class', () => {
        const expected = ' addClass1 addClass2 hovered';
        expect(
            classNames('', { hovered: true, scrollable: undefined }, [
                'addClass1',
                'addClass2',
            ]),
        ).toBe(expected);
    });

    test('With empty strings in additional classes', () => {
        const expected = 'baseClass addClass1 addClass2';
        expect(
            classNames('baseClass', {}, ['addClass1', '', 'addClass2', '']),
        ).toBe(expected);
    });
});
