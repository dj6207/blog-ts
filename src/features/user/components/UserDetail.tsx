import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import '../assets/UserDetail.css'

export default function UserDetail() {
    const dispatch = useAppDispatch();
    const userDetails = useAppSelector((state) => state.user);
    const numBlogs = useAppSelector((state) => state.blogs.blogs.length);
    return (
        <div className='user-container'>
            <h1 className='user-name'>{userDetails.userName}</h1>
            <h2> Total Blogs: {numBlogs}</h2>
        </div>
    )
}
