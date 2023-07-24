import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useParams } from 'react-router-dom';
import '../assets/BlogDetail.css'
import { useGetBlogByIdQuery } from '../../../services/apiSlice';
import { updateBlogs } from '../../../slices/blogsSlice';

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
    } = useGetBlogByIdQuery(parseInt(id!));

    const [isEditing, setIsEditing] = useState(false);

    const [editedBlogTitle, setEditedBlogTitle] = useState(blogDetails.blogTitle);
    const [editedBlogText, setEditedBlogText] = useState(blogDetails.text);

    const canEdit = [editedBlogTitle, editedBlogText].every(Boolean) && !isLoading;

    function handleEditClick() {
      setIsEditing(true);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (canEdit) {
        // the naming passed in must have the same naming passed out or else it will be undefined
        dispatch(updateBlogs({editedBlogTitle, editedBlogText, id}));
        setIsEditing(false);
      }

    }

    let blogDetailItem
    if (isLoading) {
      blogDetailItem = <p>Fetching Blog Detail</p>
    } else if (isSuccess) {
      blogDetailItem = 
        <>
          <h1 className="blog-title">{fetchedBlog.blogTitle}</h1>
          <p className="blog-date">Published on {fetchedBlog.date}</p>
          <div className="blog-content">{fetchedBlog.text}</div>
          <button onClick={handleEditClick}>Edit Post</button>
        </>
    } else if (isError) {
      blogDetailItem = 
        // <>
        //   <h1 className="blog-title">{blogDetails.blogTitle}</h1>
        //   <p className="blog-date">Published on {blogDetails.date}</p>
        //   <div className="blog-content">
        //     <p>Blog not found</p>
        //     {blogDetails.text}
        //   </div>
        //   <button onClick={handleEditClick}>Edit Post</button>
        // </>
        <>
        {isEditing ? (
          <>
            <form onSubmit={handleSubmit} className='form'>
              <input
                type="text"
                value={editedBlogTitle}
                onChange={(e) =>
                  setEditedBlogTitle( e.target.value )
                }
                required
              />
              <textarea
                value={editedBlogText}
                onChange={(e) =>
                  setEditedBlogText( e.target.value )
                }
                required
              />
              <button type='submit'>Save</button>
            </form>
          </>
        ) : (
          <>
            <h1 className="blog-title">{blogDetails.blogTitle}</h1>
            <p className="blog-date">Published on {blogDetails.date}</p>
            <div className="blog-content">{blogDetails.text}</div>
            <button onClick={handleEditClick}>Edit Post</button>
          </>
        )}
      </>
    }

    return (
      <div className="blog-container">
        {blogDetailItem}
      </div>
    )
}
