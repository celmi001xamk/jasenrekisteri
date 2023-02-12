import React, { createContext, useEffect, useRef, useState } from 'react';
import { Member } from '../interfaces/interfaces'

export const MemberContext: React.Context<any> = createContext(undefined);

interface Props {
    children: React.ReactNode;
}

export const MemberProvider: React.FC<Props> = (props: Props): React.ReactElement => {
    const fetched: React.MutableRefObject<boolean> = useRef(false);

    const [members, setMembers] = useState<Member[]>([])

    const fetchMembers = async () => {
        const connection = await fetch("api/member");
        const data = await connection.json();
        setMembers(data);
    }

    const addMember = async (member: Member) => {
        console.log(member.active, typeof member.active)
        const connection = await fetch("api/member", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname: member.firstname,
                lastname: member.lastname,
                email: member.email,
                phone: member.phone,
                active: member.active
            })
        });
        if (connection.ok) {
            const data = await connection.json()
            setMembers(data)
        }
    }    

    useEffect(() => {
        if (!fetched.current) fetchMembers();

        return () => { fetched.current = true }
    }, []);

    return (
        <MemberContext.Provider value={{
            members,
            setMembers,
            addMember
        }}>
            {props.children}
        </MemberContext.Provider>
    )
}