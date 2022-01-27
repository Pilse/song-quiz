import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home/Home';
import Room from './Room/Room';
import RoomCreate from './Room/RoomCreate/RoomCreate';
import RoomEnter from './Room/RoomEnter/RoomEnter';
import Game from './Game/Game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/room" element={<Room />} />
      <Route path="/room/create" element={<RoomCreate />} />
      <Route path="/room/enter" element={<RoomEnter />} />
      <Route path="/game" element={<Game />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
