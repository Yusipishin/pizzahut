import { screen, waitFor } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteMain } from '@/shared/const/router';

describe('app/providers/router/AppRouter.test', () => {
    test('The page render', () => {
        componentRender(<AppRouter />, {
            route: getRouteMain(),
        });

        waitFor(() => {
            const page = screen.findByTestId('MainPage');
            expect(page).toBeInTheDocument();
        });
    });

    test('Page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/abcde',
        });

        waitFor(() => {
            const page = screen.findByTestId('MainPage');
            expect(page).toBeInTheDocument();
        });
    });

    // test('Редирект неавторизованного пользователя на главную страницу', async () => {
    //     componentRender(<AppRouter />, {
    //         route: getRouteProfile('1'),
    //     });

    //     const page = await screen.findByTestId('MainPage');
    //     expect(page).toBeInTheDocument();
    // });

    // test('Доступ к закрытой странице для авторизованного пользователя', async () => {
    //     componentRender(<AppRouter />, {
    //         route: getRouteProfile('1'),
    //         initialState: {
    //             user: { _inited: true, authData: { username: 'Alex' } },
    //         },
    //     });

    //     const page = await screen.findByTestId('ProfilePage');
    //     expect(page).toBeInTheDocument();
    // });

    // test('Доступ запрещён (роль отсутствует)', async () => {
    //     componentRender(<AppRouter />, {
    //         route: getRouteAdminPanel(),
    //         initialState: {
    //             user: { _inited: true, authData: { username: 'Alex' } },
    //         },
    //     });

    //     const page = await screen.findByTestId('ForbiddenPage');
    //     expect(page).toBeInTheDocument();
    // });

    // test('Доступ разрешён (роль присутствует)', async () => {
    //     componentRender(<AppRouter />, {
    //         route: getRouteAdminPanel(),
    //         initialState: {
    //             user: {
    //                 _inited: true,
    //                 authData: { username: 'Alex', roles: [UserRole.ADMIN] },
    //             },
    //         },
    //     });

    //     const page = await screen.findByTestId('AdminPanelPage');
    //     expect(page).toBeInTheDocument();
    // });
});
