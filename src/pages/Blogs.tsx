import React from 'react';
import { BlogList, BlogForm } from '../features/blogs';

export default function Blogs() {
    return (
        <div className='blog'>
            <BlogForm></BlogForm>
            <BlogList></BlogList>
        </div>
    )
}
