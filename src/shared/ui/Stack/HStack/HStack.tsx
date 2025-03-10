import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => (
    <Flex {...props} direction="row" data-testid="HStack.Flex" />
);
