import React, { useEffect } from 'react';
import '../assets/BlogList.css';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Link, useParams } from 'react-router-dom';
import { useGetBlogsByUserNameQuery } from '../../../services/apiSlice';
import { setBlogsOwner } from '../../../slices/blogsSlice';

export default function BlogList() {
    const dispatch = useAppDispatch();
    const blogs = useAppSelector((state) => state.blogs.blogs);
    const { userName } = useParams();

    useEffect(() => {
        dispatch(setBlogsOwner(userName));
    }, [userName]);

    // This will not work at the moment since the api is not setup yet on my end
    const { 
        data: fetchedBlogs, 
        isLoading, 
        isSuccess, 
        isError, 
        error 
    } = useGetBlogsByUserNameQuery(userName!);

    let blogItem
    if (isLoading) {
        // If I had a spinner component I would put that here
        blogItem = <p>Fetching Blogs</p>
    } else if (isSuccess) {
        blogItem = fetchedBlogs.map(blog => 
            <Link to={`/${userName}/blogs/${blog.blogId}`} key={blog.blogId} className="blogItem">
                <div className="blogTitle">Title: {blog.blogTitle}</div>
                <div className="blogDate">Date: {blog.date}</div>
            </Link>)
    } else if (isError) {
        // Since the Api is not set up it will display mock data
        blogItem = 
            <>
                {blogs.map((Blog) => (
                <Link to={`/${userName}/blogs/${Blog.blogId}`} key={Blog.blogId} className="blogItem">
                    <div className="blogTitle">Title: {Blog.blogTitle}</div>
                    <div className="blogDate">Date: {Blog.date}</div>
                </Link>
                ))}    
            </>
        console.log(`An error has occured when fetching data: ${error}`)
    }
    return (
        <div className='blogList'>
            {blogItem}
        </div>
    )
}
