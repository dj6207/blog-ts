import { createSlice } from '@reduxjs/toolkit';
import { BlogsState } from '../types';

const initialState: BlogsState = {
    blogsOwner: '',
    blogs: [
    {
        blogOwner: 'Jeff',
        blogId: 0,
        blogTitle: 'Today',
        date: '5/22/2003',
        text: 'K b'
    },
    {
        blogOwner: 'Jeff',
        blogId: 1,
        blogTitle: 'Today',
        date: '5/22/2003',
        text: 'K hussssssssssssh'
    },
    {
        blogOwner: 'Tom',
        blogId: 2,
        blogTitle: 'Today',
        date: '5/23/2003',
        text: 'Ksdfsdfsf'
    },
    {
        blogOwner: 'Tom',
        blogId: 3,
        blogTitle: 'Today',
        date: '5/23/2003',
        text: ' da fadsfaK'
    },
    {
        blogOwner: 'Tcxvxcvom',
        blogId: 4,
        blogTitle: 'Today',
        date: '5/23/2003',
        text: 'Kasdf dasga sd '
    },
    {
        blogOwner: 'ss',
        blogId: 5,
        blogTitle: 'Today',
        date: '5/23/2003',
        text: 'K dfa fdasf '
    },
    {
        blogOwner: 'Tom',
        blogId: 6,
        blogTitle: 'que',
        date: '5/23/2003',
        text: 'K daf asdgadsg'
    },
    {
        blogOwner: 'Tom',
        blogId: 7,
        blogTitle: 'quy',
        date: '5/23/2003',
        text: 'K f wesadf zx'
    },
    {
        blogOwner: 'Tom',
        blogId: 8,
        blogTitle: 'sw',
        date: '5/23/2003',
        text: 'K dfa feascdvzxcv'
    },
    {
        blogOwner: 'Tom',
        blogId: 9,
        blogTitle: 'sdf',
        date: '5/23/2003',
        text: 'K dasxcvdg e sd'
    },
    {
        blogOwner: 'Tom',
        blogId: 10,
        blogTitle: 'gg',
        date: '5/23/2003',
        text: 'K dxczvxvse  sdf'
    },
    {
        blogOwner: 'Tom',
        blogId: 11,
        blogTitle: 'ff',
        date: '5/23/2003',
        text: 'K dfsajfh auiscv'
    },
    {
        blogOwner: 'Tom',
        blogId: 12,
        blogTitle: 'sd',
        date: '5/23/2003',
        text: 'Ksdfawe   eeeeeeeeeeeeee'
    }
]
}

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogsOwner: (state, actions) => {
            state.blogsOwner = actions.payload;
        },
        getBlogs: (state, actions) => {
            // Get blogs by owner, if blogs is empty will make a call to the back end to get the blogs
        },
        addBlog: (state, action) => {
            // Add a blog from the blog list
        },
        deleteBlog: (state, action) => {
            // Delete a blog from the blog list by blog id
        }
    }
});

export const { setBlogsOwner } = blogsSlice.actions;
export default blogsSlice.reducer;

