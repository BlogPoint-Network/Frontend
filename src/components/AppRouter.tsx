import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import ForTest from "../pages/ForTest";
import MyChannel from "../pages/MyChannel";
import PopularChannels from "../pages/PopularChannels";
import RatingOfChannels from "../pages/RatingOfChannels";
import Recommendations from "../pages/Recommendations";
import ChannelsSubscribe from "../pages/ChannelsSubscribe";

const AppRouter = () => {

    return (
    <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/test" element={<ForTest/>} />
        <Route path="/mychannel" element={<MyChannel/>} />
        <Route path="/popularchannels" element={<PopularChannels/>} />
        <Route path="/ratingofchannels" element={<RatingOfChannels/>} />
        <Route path="/recommendations" element={<Recommendations/>} />
        <Route path="/channelsubscribe" element={<ChannelsSubscribe/>} />
    </Routes>
);
};

export default AppRouter;