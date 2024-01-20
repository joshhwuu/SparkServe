import './App.css';
import axios from 'axios'
import { useEffect } from 'react';
import Router from './Router';

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
          backgroundColor: 'Orange', height: '100vh', width: '451pt'
        }}>
          <Router />
        </Typography>
      </Container>
    </div>
  );
}

export default App;
