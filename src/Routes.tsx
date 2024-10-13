import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Uploads from './pages/Uploads/Uploads';
import NotFound from './pages/NotFound/NotFound';
import MainLayout from './layouts/MainLayout';

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/uploads" element={<Uploads />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}