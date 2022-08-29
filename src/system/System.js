
import SystemLayout from 'components/layouts/SytemLayout/SystemLayout';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import { privateRoutes } from 'routes';
import Login from './page/Login';

function System() {
    return (
        <Routes>
            {privateRoutes.map((route, index) => {
                const Page = route.component;
                const Layout = route.layout === null ? Fragment : SystemLayout;
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                )
            })}
        </Routes>
    );
}

export default System;