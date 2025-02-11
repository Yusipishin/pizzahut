import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppRouter } from './providers/router';
import { userActions } from '@/entities/User';
import './styles/index.scss';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className="app">
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
