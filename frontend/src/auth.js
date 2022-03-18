import { Navigate, Outlet } from 'react-router-dom';

function isAuth(){
    return false;
};

export function PrivateRoute(){
    return isAuth() ? <Outlet /> : <Navigate to='/' />
};

export function PublicRoute(){
    return !isAuth() ? <Outlet /> : <Navigate to='/home' />
};