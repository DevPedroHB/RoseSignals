import { Routes, Route } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './Auth';
import Index from './pages/Index';
import Login from './pages/Login';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

export default function MainRoutes(){
    return(
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path='/' element={<Index />} />
                <Route path='/login' element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path='/home' element={<Home />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}