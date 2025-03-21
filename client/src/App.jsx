import { Routes, Route } from 'react-router-dom';
import React from 'react'
import { useState } from 'react';
import { UserContext } from './contexts/userContext';

import LinksOnTop from './components/links-on-top/LinksOnTop'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import Plans from './components/plans/Plans'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import OrderList from './components/order-list/OrderList';
import Login from './components/login/Login';
import Register from "./components/register/Register";
import CurrentOrder from './components/current-order/CurrentOrder';
import OrderLatest3 from './components/order-latest-3/OrderLatest3';
import PageNotFound from './components/not-found/PageNotFound';
import EditOrder from './components/edit-order/EditOrder';
import Logout from './components/logout/Logout';


function App() {
    const [authData, setAuthData] = useState({});

    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    };
    const userLogoutHandler = () => {
        setAuthData({});
    };


    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            <div className="desktop">
                <LinksOnTop />
                <div className="w3-content">

                    <Routes>

                        <Route path="/" element={<Content />} />
                        <Route path="/plans" element={<Plans />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/order-list" element={<OrderList />} />
                        <Route path="/order-list/:orderId" element={<CurrentOrder />} />
                        <Route path="/order-list/:orderId/edit" element={<EditOrder />} />
                        <Route path="/order-list/latest" element={<OrderLatest3 />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="*" element={<PageNotFound />} />

                    </Routes>
                </div>

                <Footer />
            </div>
        </ UserContext.Provider>
    )
}

export default App
