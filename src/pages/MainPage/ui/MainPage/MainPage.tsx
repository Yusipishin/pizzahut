import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { HeaderMain } from '@/widgets/Headers';
import { MainPagePreview } from '../MainPagePreview/MainPagePreview';

const MainPage = memo(() => (
    <>
        <HeaderMain />
        <Page data-testid="MainPage">
            <MainPagePreview />
        </Page>
    </>
));

export default MainPage;
