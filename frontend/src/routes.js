import { Routes, Route, Navigate } from 'react-router-dom';
// import IsAuthenticated from './auth';
import Index from './pages/Index';
import Login from './pages/Login';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

export default function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}