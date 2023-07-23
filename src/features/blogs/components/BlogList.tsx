import React from 'react';
import '../assets/BlogList.css';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Link } from 'react-router-dom';
import { setBlogsOwner } from '../../../slices/blogsSlice';

export default function BlogList() {
    const dispatch = useAppDispatch();
    const blogs = useAppSelector((state) => state.blogs.blogs);
    const user = useAppSelector((state) => state.user);
    dispatch(setBlogsOwner(user.userName));
    return (
        <div className='blogList'>
            {blogs.map((Blog) => (
            <Link to={`/${user.userName}/blogs/${Blog.blogId}`} key={Blog.blogId} className="blogItem">
                <div className="blogTitle">Title: {Blog.blogTitle}</div>
                <div className="blogDate">Date: {Blog.date}</div>
            </Link>
            ))}
        </div>
    )
}
