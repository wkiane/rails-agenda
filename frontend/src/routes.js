import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Contacts from './pages/Contacts';
import CreateAddress from './pages/CreateAddress';
import CreateContact from './pages/CreateContact';
import ContactDetails from './pages/ContactDetails';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" extact element={<Contacts />} />
            <Route path="/contacts/create" element={<CreateContact />} />
            <Route path="/address/:id" element={<ContactDetails />} />
            <Route path="/address/create/:id" element={<CreateAddress />} />
        </Routes>
    </BrowserRouter>
);

export default Router;