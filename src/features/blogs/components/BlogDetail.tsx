import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useParams } from 'react-router-dom';
import '../assets/BlogDetail.css'

export default function BlogDetail() {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const blogDetails = useAppSelector((state) => state.blogs.blogs[parseInt(id!)])
    return (
        <div className="blog-container">
        {blogDetails ? (
          <>
            <h1 className="blog-title">{blogDetails.blogTitle}</h1>
            <p className="blog-date">Published on {blogDetails.date}</p>
            <div className="blog-content">{blogDetails.text}</div>
          </>
        ) : (
          <p>Blog not found</p>
        )}
      </div>
    )
}
