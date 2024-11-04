import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { HeaderMain } from '@/widgets/Headers';

const MainPage = memo(() => (
    <>
        <HeaderMain />
        <Page data-testid="MainPage">
            <div />
        </Page>
    </>
));

export default MainPage;
