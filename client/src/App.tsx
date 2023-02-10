import React from 'react';
import { Container, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Frontpage } from '../src/components/Frontpage';

const App: React.FC = (): React.ReactElement => {

  return (
    <Container maxWidth="md">

      <Typography variant="h3" align="center">Mustanaamiokerhon jäsenrekisteri</Typography>

      <Routes>
        <Route path="/" element={<Frontpage />} />
      </Routes>


    </Container>
  );
}

export default App;