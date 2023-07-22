import React from 'react';
import '../assets/BlogList.css';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

export default function BlogList() {
    const dispatch = useAppDispatch();
    const blogs = useAppSelector((state) => state.blogs.blogs);
    return (
        <div className='blogList'>
            {blogs.map((Blog) => (
                <button key={Blog.blogId}>Writer: {Blog.blogOwner} Date: {Blog.date}</button>
            ))}
        </div>
    )
}
