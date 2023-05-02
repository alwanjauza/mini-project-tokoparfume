import React, { Suspense } from 'react';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoadingComponents from '../components/layouts/loadingComponents/LoadingComponents/LoadingComponents';
import LoginPage from '../pages/loginPage/LoginPage';
import LayoutComponent from '../components/layouts/LayoutComponent';
import HomePage from '../pages/homePage/HomePage';
import ShopPage from '../pages/shopPage/ShopPage';
import StoryPage from '../pages/storyPage/StoryPage';
import CreationPage from '../pages/creationPage/CreationPage';
import FaqPage from '../pages/faqPage/FaqPage';
import TermsConditionPage from '../pages/termsConditionsPage/TermsConditionPage';
import RegisterPage from '../pages/registerPage/RegisterPage';

const RouteManagement = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect (()=> {
        if (!token) {
            navigate('/login')
        }
    }, [token])

    return (
        <Suspense fallback={<LoadingComponents/>}>
            {!token ? (
                <Routes>
                    <Route path='/login' element={<LoginPage/>} />
                    <Route path='/register' element={<RegisterPage/>} />
                </Routes>
            ) : (
                <LayoutComponent>
                    <Routes>
                        <Route path='/' element={<HomePage/>} />
                        <Route path='/shop' element={<ShopPage/>} />
                        <Route path='/our-story' element={<StoryPage/>} />
                        <Route path='/creation' element={<CreationPage/>} />
                        <Route path='/faq' element={<FaqPage/>} />
                        <Route path='/terms-conditions' element={<TermsConditionPage/>} />
                    </Routes>
                </LayoutComponent>
            )}
        </Suspense>
    );
}

export default RouteManagement;
