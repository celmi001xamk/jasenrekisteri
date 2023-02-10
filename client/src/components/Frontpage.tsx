import React from 'react';
import { TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Paper } from "@mui/material"
import { Member } from "../interfaces/interfaces"
export const Frontpage: React.FC = (): React.ReactElement => {

    const testUsers: Member[] = [
        {
            "id": 1,
            "lastname": "Tester",
            "firstname": "Timo",
            "email": "timo@tester.fi",
            "phone": "1234567890",
            "signedUpDate": new Date("2023-02-08T15:35:16.834Z"),
            "active": false
        },
        {
            "id": 2,
            "lastname": "Kakola",
            "firstname": "Kaarle",
            "email": "kaarle.kakola@email.fi",
            "phone": "0401111111",
            "signedUpDate": new Date("2023-02-08T15:35:52.811Z"),
            "active": false
        },
        {
            "id": 3,
            "lastname": "Jansson",
            "firstname": "Timo",
            "email": "herkkuruoka@nalka.fi",
            "phone": "0100100123",
            "signedUpDate": new Date("2023-02-08T15:36:58.888Z"),
            "active": false
        }
    ]

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
                        <TableCell  align="right">Aktiivinen</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {testUsers.map((row, idx) => (
                        <TableRow
                            key={idx}
                        >                            
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.firstname}</TableCell>
                            <TableCell>{row.lastname}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                            <TableCell>{new Date(row.signedUpDate).toLocaleDateString("FI-fi")}</TableCell>
                            <TableCell align="right">{(row.active) ? "Kyllä" : "Ei"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    )
}