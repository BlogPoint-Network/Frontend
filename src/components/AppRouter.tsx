import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import ForTest from "../pages/ForTest";
import DeleteTest from "../pages/DeleteTest";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/test" element={<ForTest/>} />
            <Route path="/newtest" element={<DeleteTest/>} /> // удалить
        </Routes>
    );
};

export default AppRouter;