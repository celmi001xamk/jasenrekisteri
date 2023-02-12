import { Box, Button, TextField, Checkbox } from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { MemberContext } from '../context/MemberContext';
import { Member } from '../interfaces/interfaces'

export const Createpage: React.FC = (): React.ReactElement => {

    const { addMember } = useContext(MemberContext);
    const navigate: NavigateFunction = useNavigate();
    const formRef = useRef<HTMLFormElement>();
    const [error, setError] = useState<boolean>(false);

    const createMember = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formRef.current!.firstname.value &&
            formRef.current!.lastname.value &&
            formRef.current!.phone.value &&
            formRef.current!.email.value) {

            const newMember: Member = {
                id: 0,
                firstname: formRef.current!.firstname.value,
                lastname: formRef.current!.lastname.value,
                phone: formRef.current!.phone.value,
                email: formRef.current!.email.value,
                active: formRef.current!.active.checked,
                signedUpDate: new Date()
            }

            addMember(newMember);
            setError(false)
            navigate("/");
        } else {
            setError(true)
        }
    }

    return (
        <Box
            component="form"
            onSubmit={createMember}
            ref={formRef}
        >
            <Grid container maxWidth={"sm"} justifySelf="center" margin={"auto"} spacing={2} >
                <Grid xs={4}>
                    <TextField
                        name="firstname"
                        label="Etunimi"
                        variant="filled"
                        fullWidth
                        autoFocus
                    />
                </Grid>
                <Grid xs={6}>
                    <TextField
                        name="lastname"
                        label="Sukunimi"
                        variant="filled"
                        fullWidth
                    />
                </Grid>
                <Grid xs={8}>
                    <TextField
                        name="email"
                        label="Email"
                        variant="filled"
                        fullWidth
                    />
                </Grid>
                <Grid xs={8}>
                    <TextField
                        name="phone"
                        label="Puhelin"
                        variant="filled"
                        fullWidth
                    />
                </Grid>
                <Grid xs={12}>
                    <FormControlLabel
                        sx={{ padding: 1 }}
                        control={<Checkbox
                            name='active'
                            color='primary'
                        />}
                        label="Aktiivinen"
                    />
                </Grid>
                <Grid xs={6}>
                    <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>Lisää jäsen</Button>
                </Grid>
                {error
                    ? <Grid xs={12}>
                        <Typography
                            variant='h6'
                            sx={{
                                color: "red",
                                backgroundColor: "rgba(255,0,0,0.1)",
                                padding: 1,
                                border: "1px solid red",
                                borderRadius: "5px"
                            }}>
                            Täytä kaikki kentät
                        </Typography>
                    </Grid>
                    : null
                }
            </Grid>
        </Box>
    )
}