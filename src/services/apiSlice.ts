import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Blog } from '../types';

const serverUrl = 'http://localhost:8080/';

export const apiSlice = createApi({
    reducerPath: 'blogsApi',
    // url needs to be changed based on api
    baseQuery: fetchBaseQuery({ baseUrl: serverUrl}),
    endpoints: (builder) => ({
        // query<Result type, type passing in> in this case the 
        // result will be a list blogs and the type passed in to get 
        // the blogs is a string which is the user name
        getBlogsByUserName: builder.query<Blog[], string>({
            query: (userName) => `blogs/${userName}`,
        }),
        getBlogId: builder.query<Blog, number>({
            query: (blogId) => `blog/${blogId}`,
        }),
        createNewBlog: builder.mutation({
            query: initialBlog => ({
                url: '/blog',
                method: 'POST',
                // automatically be JSON-serialized
                body: initialBlog
            })
        }),
    })
})

export const { 
    useGetBlogsByUserNameQuery, 
    useGetBlogIdQuery, 
    useCreateNewBlogMutation,
 } = apiSlice