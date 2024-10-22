import 'swiper/scss';
import './styles/index.scss';
import { Suspense } from 'react';

const App = () => (
    <div className="app">
        <Suspense fallback="">
            <div />
        </Suspense>
    </div>
);

export default App;
