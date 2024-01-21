import './App.css';
import { Routes, Route } from 'react-router-dom'

import Main from './containers/Main'

import Login from './containers/Login'
import Looking from './components/Looking'
import Open from './components/Open'
import ProfilePage from './components/UserProfile';

import React from 'react'
import { Typography } from '@mui/material';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography component="div" style={{
          height: '932px', width: '430px'
        }}>
          <Routes>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/looking" element={<Looking />} />
            <Route path="/open" element={<Open />} />
          </Routes>
        </Typography>
      </Container>
    </div>
  );
}

export default App;
