import React from 'react';
import { BlogList, BlogForm } from '../features/blogs';
import { SearchBar } from '../components/Searchbar';

export default function Blogs() {
    return (
        <div className='blog'>
            <SearchBar></SearchBar>
            <BlogForm></BlogForm>
            <BlogList></BlogList>
        </div>
    )
}
