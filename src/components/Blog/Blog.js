import React, { useContext, useEffect, useState } from 'react';
import './Blog.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { MatchBlogContext } from '../../App';

const Blog = () => {
    const [blogs, setBlogs] = useContext(MatchBlogContext)
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
            .then(res => res.json())
            .then(data => setBlogs(data.meals))
    }, [])
    console.log(blogs)
    const nav = useNavigate()
    return (
        <div className='blogs'>
            {
                blogs.map(blog => <div className='blog' key={blog.idMeal}>
                    <img src={blog.strMealThumb} alt="" />
                    <h2>{blog.strMeal}</h2>
                    <p>{blog.strInstructions.length > 100 ? blog.strInstructions.slice(0, 100) + "....." : blog.strInstructions}</p>
                    <Button onClick={() => nav(`/blogdetails/${blog.idMeal}`)}>Details</Button>
                    <span><b>{blog.strMeasure4 ? blog.strMeasure4 : 'Not available'}</b></span>
                </div>)
            }
        </div>
    );
};

export default Blog;