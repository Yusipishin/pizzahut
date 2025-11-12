import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { HeaderMain } from '@/widgets/Headers';
import { MainPagePreview } from '../MainPagePreview/MainPagePreview';
import { MainPageMenu } from '../MainPageMenu/MainPageMenu';
import { MainPageBanner } from '../MainPageBanner/MainPageBanner';

const MainPage = memo(() => (
    <>
        <HeaderMain />
        <Page data-testid="MainPage">
            <MainPagePreview />
            <MainPageMenu />
            <MainPageBanner />
        </Page>
    </>
));

export default MainPage;
