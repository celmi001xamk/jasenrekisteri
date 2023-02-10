import React from 'react';
import { Stack, Link, Divider } from '@mui/material'

export const Navigation: React.FC = (): React.ReactElement => {
    return (
        <Stack margin={1}
            justifyContent="center"
            direction="row"
            spacing={2.5}
            divider={<Divider orientation="vertical" flexItem />}
        >
            <Link sx={{ padding: "0 20px" }} underline="hover" href='/'>Etusivu</Link>
            <Link sx={{ padding: "0 20px" }} underline="hover" href='/create'>Lisää</Link>
            <Link sx={{ padding: "0 20px" }} underline="hover" href='/update'>Muokkaa</Link>
            <Link sx={{ padding: "0 20px" }} underline="hover" href='/delete'>Poista</Link>
        </Stack>
    )
}