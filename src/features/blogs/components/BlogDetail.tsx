import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useParams } from 'react-router-dom';
import '../assets/BlogDetail.css'
import { useGetBlogIdQuery } from '../../../services/apiSlice';

export default function BlogDetail() {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const blogDetails = useAppSelector((state) => state.blogs.blogs[parseInt(id!)])

    const {
      data: fetchedBlog,
      isLoading,
      isSuccess,
      isError,
      error
    } = useGetBlogIdQuery(parseInt(id!));

    let blogDetailItem
    if (isLoading) {
      blogDetailItem = <p>Fetching Blog Detail</p>
    } else if (isSuccess) {
      blogDetailItem = 
        <>
          <h1 className="blog-title">{fetchedBlog.blogTitle}</h1>
          <p className="blog-date">Published on {fetchedBlog.date}</p>
          <div className="blog-content">{fetchedBlog.text}</div>
        </>
    } else if (isError) {
      blogDetailItem = 
        <>
          <h1 className="blog-title">{blogDetails.blogTitle}</h1>
          <p className="blog-date">Published on {blogDetails.date}</p>
          <div className="blog-content">
            <p>Blog not found</p>
            {blogDetails.text}
          </div>
        </>

    }

    return (
        <div className="blog-container">
        {/* {blogDetails ? (
          <>
            <h1 className="blog-title">{blogDetails.blogTitle}</h1>
            <p className="blog-date">Published on {blogDetails.date}</p>
            <div className="blog-content">{blogDetails.text}</div>
          </>
        ) : (
          <p>Blog not found</p>
        )} */}
        {blogDetailItem}
      </div>
    )
}
