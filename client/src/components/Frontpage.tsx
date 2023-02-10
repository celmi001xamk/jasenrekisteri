import React, { useContext } from 'react';
import { TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Paper } from "@mui/material"
import { Member } from "../interfaces/interfaces"
import { MemberContext } from '../context/MemberContext';

export const Frontpage: React.FC = (): React.ReactElement => {

    const { members } = useContext(MemberContext);

    return (
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
    )
}