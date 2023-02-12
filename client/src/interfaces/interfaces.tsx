export interface Member {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    signedUpDate: Date,
    active: boolean
}

export interface MemberDialog {
    active: boolean,
    memberIndex: number
}