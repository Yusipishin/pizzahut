import { memo, useState } from 'react';
import { ProductList } from '@/entities/Product';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Container } from '@/shared/ui/Container';
import { HeaderMenu } from '@/widgets/Headers';

interface MainPageMenuProps {
    className?: string;
}

export const MainPageMenu = memo((props: MainPageMenuProps) => {
    const { className } = props;
    const [activeEndpoint, setEndpoint] = useState('pizza');

    const handleClick = (newEndpoint: string) => {
        setEndpoint(newEndpoint);
    };

    return (
        <Container Tag="section" className={classNames('', {}, [className])}>
            <HeaderMenu
                handleClick={handleClick}
                activeEndpoint={activeEndpoint}
            />
            <ProductList activeEndpoint={activeEndpoint} />
        </Container>
    );
});
