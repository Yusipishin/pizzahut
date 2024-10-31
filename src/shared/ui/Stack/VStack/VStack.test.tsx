import { render, waitFor } from '@testing-library/react';
import { VStack } from './VStack';

describe('shared/ui/Flex/VStack.test', () => {
    test('Renders VStack with default props', () => {
        const { getByTestId } = render(<VStack>VStackTest</VStack>);
        waitFor(() => {
            expect(getByTestId('VStack.Flex')).toBeInTheDocument();
            expect(getByTestId('VStack.Flex')).toHaveStyle({
                'flex-direction': 'column',
            });
        });
    });

    test('Renders children correctly with default alignment', () => {
        const { getByText, getByTestId } = render(
            <VStack>
                <div>Child 1</div>
                <div>Child 2</div>
            </VStack>,
        );
        waitFor(() => {
            expect(getByTestId('VStack.Flex')).toHaveStyle({
                'align-items': 'start',
            });
            expect(getByText('Child 1')).toBeInTheDocument();
            expect(getByText('Child 2')).toBeInTheDocument();
        });
    });

    test('Renders VStack with custom align prop', () => {
        const { getByTestId } = render(
            <VStack align="center">VStackTest</VStack>,
        );
        waitFor(() => {
            expect(getByTestId('VStack.Flex')).toHaveStyle({
                'align-items': 'center',
            });
        });
    });
});
