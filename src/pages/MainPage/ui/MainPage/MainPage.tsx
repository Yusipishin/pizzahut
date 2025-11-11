import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { HeaderMain } from '@/widgets/Headers';
import { MainPagePreview } from '../MainPagePreview/MainPagePreview';
import { MainPageMenu } from '../MainPageMenu/MainPageMenu';

const MainPage = memo(() => (
    <>
        <HeaderMain />
        <Page data-testid="MainPage">
            <MainPagePreview />
            <MainPageMenu />
        </Page>
    </>
));

export default MainPage;
