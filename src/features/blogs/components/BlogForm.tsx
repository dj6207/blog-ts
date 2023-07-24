import React, { useState } from 'react';
import '../assets/BlogForm.css';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useCreateNewBlogMutation } from '../../../services/apiSlice';
import { addBlog } from '../../../slices/blogsSlice';

export default function BlogForm() {
    const dispatch = useAppDispatch();
    const userName = useAppSelector((state) => state.user.userName)
    const nextBlogId = useAppSelector((state) => state.blogs.blogs.length);

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [createNewBlog, { isLoading }] = useCreateNewBlogMutation();
    const canSave = [title, content].every(Boolean) && !isLoading;

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (canSave) {
            try {
                await createNewBlog({ userName, nextBlogId, title, content }).unwrap()
                setTitle('')
                setContent('')
            } catch (err) {
                dispatch(addBlog({ userName, nextBlogId, title, content }));
                console.error('Failed to save the post: ', err)
            }
        }
    };
    
    if (!showForm) {
        return (
            <button onClick={() => setShowForm(true)}>Create Blog</button>
        );
    }
    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder='Enter Title'
                    required
                />
                <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='Enter Text'
                    required
                />
                <button type="submit">Create Blog</button>
                <button onClick={() => setShowForm(false)}>Cancel</button>
            </form>
        </div>
    )
}