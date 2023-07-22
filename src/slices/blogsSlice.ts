import { createSlice } from '@reduxjs/toolkit';
import { BlogsState } from '../types';

const initialState: BlogsState = {
    blogsOwner: '',
    blogs: [
    {
        blogOwner: 'Jeff',
        blogId: 1,
        date: '5/22/2003',
        text: 'K huh'
    },
    {
        blogOwner: 'Tom',
        blogId: 2,
        date: '5/23/2003',
        text: 'K'
    }
    
]
}

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
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

export const { getBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;

