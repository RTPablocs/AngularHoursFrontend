export interface commonUser {
    id: string,
    name: string,
    surname: string,
    username: string,
    email: string
}


export interface loggedUser {
    id: string,
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date
}

export interface userList {
    total: number,
    users: Array<commonUser>
}
