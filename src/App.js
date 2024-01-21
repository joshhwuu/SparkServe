import './App.css';
import axios from 'axios'
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Main from './containers/Main'
import Message from './containers/Message'
import Login from './containers/Login'
import Looking from './components/Looking'
import Open from './components/Open'

import React from 'react'
import { Typography } from '@mui/material';
import { Container } from '@mui/material';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('./data/users.json');
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography component="div" style={{
          backgroundColor: '#323C58', height: '932px', width: '430px'
        }}>
          <Routes>
            <Route path="Message" element={<Message />} />
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
