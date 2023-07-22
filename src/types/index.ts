export interface UserState {
    userName: string,
    password: string,
    loggedIn: boolean
}

export interface BlogsState {
    blogsOwner: string,
    blogs: Blog[]
}

export interface Blog {
    blogOwner: string,
    blogId: number,
    date: string,
    text: string
}