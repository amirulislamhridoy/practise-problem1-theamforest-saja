import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { MatchBlogContext } from '../../App';
import './BlogDetails.css'

const BlogDetails = () => {
    const [blogs, setBlogs] = useContext(MatchBlogContext)
    const { id } = useParams()
    const exist = blogs.find(blog => blog.idMeal === id)
    // console.log(exist)
    const name = exist?.strMeal
    const nav = useNavigate()
    return (
        <div className='blogDetails'>
            <div className='blogDetails-bg-color'></div>
            <div className='blogDetails-info'>
                <img src={exist?.strMealThumb} alt=""></img>
                <h2>{exist?.strMeal}</h2>
                <p>{exist?.strInstructions}</p>
                <Button onClick={() => nav(`${name}`)}>More</Button>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default BlogDetails;