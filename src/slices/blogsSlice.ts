import { createSlice } from '@reduxjs/toolkit';
import { BlogsState } from '../types';
import { Blog } from '../types';

const initialState: BlogsState = {
    blogsOwner: '',
    blogs: [
    {
        blogOwner: 'Jeff',
        blogId: 0,
        blogTitle: 'Yesterday',
        date: '5/22/2003',
        text: 'Hi'
    },
    {
        blogOwner: 'Tom',
        blogId: 1,
        blogTitle: 'Today',
        date: '5/23/2003',
        text: 'No'
    },
]
}

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogsOwner: (state, actions) => {
            state.blogsOwner = actions.payload;
        },
        setBlogs: (state, actions) => {
            state.blogs = actions.payload;
        },
        addBlog: (state, action) => {
            const {userName, nextBlogId, title, content} = action.payload;
            const newBlog:Blog = {
                blogOwner: userName,
                blogId: nextBlogId,
                blogTitle: title,
                date: new Date().toLocaleDateString(),
                text: content
            }
            state.blogs.push(newBlog);
        },
        updateBlogs: (state, actions) => {
            // the naming passed in must have the same naming passed out or else it will be undefined
            const { editedBlogTitle, editedBlogText, id } = actions.payload;
            const existingBlog = state.blogs.find(blog => blog.blogId === parseInt(id))
            if (existingBlog) {
                console.log(existingBlog)
                existingBlog.blogTitle = editedBlogTitle;
                existingBlog.text = editedBlogText;
                state.blogs.push(existingBlog);
            }
        },
        getBlogs: (state, actions) => {
            // Get blogs by owner, if blogs is empty will make a call to the back end to get the blogs
        },
        deleteBlog: (state, action) => {
            // Delete a blog from the blog list by blog id
        },
        clearBlogs: (state) => {
            return initialState;
        }
    }
});

export const { setBlogsOwner, setBlogs, addBlog, clearBlogs, updateBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;

