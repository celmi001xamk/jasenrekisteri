import React, { useContext, useState } from 'react';
import { TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Paper, Dialog, Box, Button } from "@mui/material"
import { Member, MemberDialog } from "../interfaces/interfaces"
import { MemberContext } from '../context/MemberContext';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Unstable_Grid2';

export const Deletepage: React.FC = (): React.ReactElement => {
    const { members, deleteMember } = useContext(MemberContext);
    const [deleteDialog, setDeleteDialog] = useState<MemberDialog>({ active: false, memberIndex: 0 });

    const handleDelete = () => {
        deleteMember(members[deleteDialog.memberIndex]);
        setDeleteDialog({active: false, memberIndex: 0})
    }

    return (
        <>
            <Typography variant='h6'>Poista jäsen klikkaamalla riviä</Typography>
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
                                onClick={() => setDeleteDialog({ active: true, memberIndex: members.indexOf(member) })}
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
            <Dialog open={deleteDialog.active} onClose={() => setDeleteDialog({ active: false, memberIndex: 0 })}>

                {deleteDialog.active
                    ? <Box
                        padding={3}
                    >
                        <DialogTitle>
                            {`Poistetaanko jäsen ${members[deleteDialog.memberIndex].firstname} ${members[deleteDialog.memberIndex].lastname}?`}
                        </DialogTitle>
                        <Grid container maxWidth={"sm"} justifySelf="center" margin={"auto"} spacing={2} >
                            <Grid xs={6}>
                                <Button fullWidth variant="contained" onClick={() => handleDelete()} sx={{ mt: 2 }}>Poista</Button>
                            </Grid>
                            <Grid xs={6}>
                                <Button fullWidth variant="outlined" onClick={() => setDeleteDialog({ active: false, memberIndex: 0 })} sx={{ mt: 2 }}>Peruuta</Button>
                            </Grid>
                        </Grid>

                    </Box>
                    : null
                }
            </Dialog>
        </>
    )
}