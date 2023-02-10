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

    useEffect(() => {
        if (!fetched.current) fetchMembers();

        return () => { fetched.current = true }
    }, []);

    return (
        <MemberContext.Provider value={{
            members,
            setMembers
        }}>
            {props.children}
        </MemberContext.Provider>
    )
}