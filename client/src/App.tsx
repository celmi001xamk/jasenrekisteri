import React from 'react';
import { Container, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = (): React.ReactElement => {

  return (
    <Container maxWidth="md">

      <Typography variant="h3" align="center">Mustanaamiokerhon jäsenrekisteri</Typography>

      <Routes>
        <Route path="/" element={<h1>Kotisivu</h1>} />
      </Routes>


    </Container>
  );
}

export default App;