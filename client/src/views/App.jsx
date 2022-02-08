import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home/Home';
import Room from './Room/Room';
import RoomCreate from './Room/RoomCreate/RoomCreate';
import RoomEnter from './Room/RoomEnter/RoomEnter';
import Game from './Game/Game';

function App() {
  const [user, setUser] = useState({
    id: null,
    nickname: null,
    roomId: null,
    score: null,
    winningCondition: null,
    role: null,
  });

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/room" element={<Room />} />
      <Route path="/room/create" element={<RoomCreate setUser={setUser} />} />
      <Route
        path="/room/enter"
        element={<RoomEnter user={user} setUser={setUser} />}
      />
      <Route path="/game" element={<Game user={user} setUser={setUser} />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
