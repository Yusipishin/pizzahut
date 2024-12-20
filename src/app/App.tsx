import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => (
    <div className="app">
        <Suspense fallback="">
            <AppRouter />
        </Suspense>
    </div>
);

export default App;
