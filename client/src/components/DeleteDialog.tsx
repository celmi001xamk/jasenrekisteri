import React, { useContext } from 'react';
import { Dialog, Box, Button } from "@mui/material"
import { MemberContext } from '../context/MemberContext';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Unstable_Grid2';

export const DeleteDialog: React.FC = (): React.ReactElement => {
    const { members, deleteMember, deleteDialog, setDeleteDialog } = useContext(MemberContext);


    const handleDelete = () => {
        deleteMember(members[deleteDialog.memberIndex]);
        setDeleteDialog({ active: false, memberIndex: 0 })
    }

    return (
        <>
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