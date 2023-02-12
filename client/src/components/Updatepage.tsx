import React, { useContext, useRef, useState } from 'react';
import { TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Paper, Dialog, Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material"
import { Member, MemberDialog } from "../interfaces/interfaces"
import { MemberContext } from '../context/MemberContext';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Unstable_Grid2';

export const Updatepage: React.FC = (): React.ReactElement => {
    const formRef = useRef<HTMLFormElement>();
    const { members, updateMember } = useContext(MemberContext);
    const [updateDialog, setUpdateDialog] = useState<MemberDialog>({ active: false, memberIndex: 0 });

    const formHandler = (e: any) => {
        e.preventDefault();
        if (formRef.current!.firstname.value &&
            formRef.current!.lastname.value &&
            formRef.current!.phone.value &&
            formRef.current!.email.value) {

            const updatedMember: Member = {
                id: members[updateDialog.memberIndex].id,
                firstname: formRef.current!.firstname.value,
                lastname: formRef.current!.lastname.value,
                phone: formRef.current!.phone.value,
                email: formRef.current!.email.value,
                active: formRef.current!.active.checked,
                signedUpDate: members[updateDialog.memberIndex].signedUpDate
            }
            updateMember(updatedMember);
            setUpdateDialog({active: false, memberIndex: 0})
        } else {
            console.log("Failure")
        }
    };

    return (
        <>
            <Typography variant='h6'>Muokkaa klikkaamalla jäsenen riviä</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: "650" }} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Etunimi</TableCell>
                            <TableCell>Sukunimi</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Puhelin</TableCell>
                            <TableCell>Liittynyt</TableCell>
                            <TableCell align="right">Aktiivinen</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {members.map((member: Member) => (
                            <TableRow
                                key={member.id}
                                onClick={() => setUpdateDialog({ active: true, memberIndex: members.indexOf(member) })}
                            >
                                <TableCell>{member.id}</TableCell>
                                <TableCell>{member.firstname}</TableCell>
                                <TableCell>{member.lastname}</TableCell>
                                <TableCell>{member.email}</TableCell>
                                <TableCell>{member.phone}</TableCell>
                                <TableCell>{new Date(member.signedUpDate).toLocaleDateString("FI-fi")}</TableCell>
                                <TableCell align="right">{(member.active) ? "Kyllä" : "Ei"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={updateDialog.active} onClose={() => setUpdateDialog({ active: false, memberIndex: 0 })}>
                <DialogTitle>
                    {`Muokkaa jäsenen tietoja`}
                </DialogTitle>
                {updateDialog.active
                    ? <Box
                        component="form"
                        onSubmit={formHandler}
                        ref={formRef}
                        padding={3}
                    >
                        <Grid container maxWidth={"sm"} justifySelf="center" margin={"auto"} spacing={2} >
                            <Grid xs={4}>
                                <TextField
                                    name="firstname"
                                    label="Etunimi"
                                    variant="filled"
                                    fullWidth
                                    autoFocus
                                    defaultValue={members[updateDialog.memberIndex].firstname}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField
                                    name="lastname"
                                    label="Sukunimi"
                                    variant="filled"
                                    fullWidth
                                    defaultValue={members[updateDialog.memberIndex].lastname}
                                />
                            </Grid>
                            <Grid xs={8}>
                                <TextField
                                    name="email"
                                    label="Email"
                                    variant="filled"
                                    fullWidth
                                    defaultValue={members[updateDialog.memberIndex].email}
                                />
                            </Grid>
                            <Grid xs={8}>
                                <TextField
                                    name="phone"
                                    label="Puhelin"
                                    variant="filled"
                                    fullWidth
                                    defaultValue={members[updateDialog.memberIndex].phone}
                                />
                            </Grid>
                            <Grid xs={12}>
                                <FormControlLabel
                                    sx={{ padding: 1 }}
                                    control={<Checkbox
                                        name='active'
                                        color='primary'
                                        defaultChecked={members[updateDialog.memberIndex].active}
                                    />}
                                    label="Aktiivinen"
                                />
                            </Grid>
                            <Grid xs={6}>
                                <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>Tallenna</Button>
                            </Grid>
                            <Grid xs={6}>
                                <Button fullWidth variant="outlined" onClick={() => setUpdateDialog({ active: false, memberIndex: 0 })} sx={{ mt: 2 }}>Peruuta</Button>
                            </Grid>
                        </Grid>

                    </Box>
                    : null
                }
            </Dialog>
        </>
    )
}