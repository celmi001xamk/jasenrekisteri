import React from 'react';
import { Container, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Frontpage } from '../src/components/Frontpage';
import { Createpage } from '../src/components/Createpage';
import { Updatepage } from '../src/components/Updatepage';
import { Deletepage } from '../src/components/Deletepage';
import { Navigation } from '../src/components/Navigation'

const App: React.FC = (): React.ReactElement => {

    return (
        <Container maxWidth="md">

            <Typography variant="h4" align="center" sx={{padding: 2}}>Mustanaamiokerhon jäsenrekisteri</Typography>

            <Navigation/>

            <Routes>
                <Route path="/" element={<Frontpage />} />
                <Route path="/create" element={<Createpage />} />
                <Route path="/update" element={<Updatepage />} />
                <Route path="/delete" element={<Deletepage />} />
            </Routes>


        </Container>
    );
}

export default App;