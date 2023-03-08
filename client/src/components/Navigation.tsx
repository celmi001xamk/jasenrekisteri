import React from 'react';
import { Stack, Link, Divider } from '@mui/material'

export const Navigation: React.FC = (): React.ReactElement => {
    return (
        <Stack marginBottom={3}
            justifyContent="center"
            direction="row"
            spacing={2.5}
            divider={<Divider orientation="vertical" flexItem />}
        >
            <Link sx={{ padding: "0 50", fontSize: "1.5rem" }} underline="hover" href='/'>Etusivu</Link>
            <Link sx={{ padding: "0 50", fontSize: "1.5rem" }} underline="hover" href='/create'>Lisää</Link>
        </Stack>
    )
}