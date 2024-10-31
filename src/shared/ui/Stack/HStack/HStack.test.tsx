import { render, waitFor } from '@testing-library/react';
import { HStack } from './HStack';

describe('shared/ui/Flex/HStack.test', () => {
    test('Renders VStack with default props', () => {
        const { getByTestId } = render(<HStack>VStackTest</HStack>);
        waitFor(() => {
            expect(getByTestId('VStack.Flex')).toBeInTheDocument();
            expect(getByTestId('VStack.Flex')).toHaveStyle({
                'flex-direction': 'row',
            });
        });
    });

    test('Renders children correctly with default alignment', () => {
        const { getByText } = render(
            <HStack>
                <div>Child 1</div>
                <div>Child 2</div>
            </HStack>,
        );
        waitFor(() => {
            expect(getByText('Child 1')).toBeInTheDocument();
            expect(getByText('Child 2')).toBeInTheDocument();
        });
    });
});
