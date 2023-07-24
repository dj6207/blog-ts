export interface UserState {
    userName: string,
    password: string,
    loggedIn: boolean
}

export interface LoginData {
    inputUserName: string;
    inputPassword: string;
}

export interface BlogsState {
    blogsOwner: string,
    blogs: Blog[]
}

export interface SearchState {
    searchTerm: string;
}

export interface Blog {
    blogOwner: string,
    blogId: number,
    blogTitle: string,
    date: string,
    text: string
}

export interface RouteItem {
    path: string;
    label: string;
}

export type NavbarProps = {
    routes: RouteItem[];
}

export type FormProps = {
    showForm: boolean;
    title: string;
    content: string;
}