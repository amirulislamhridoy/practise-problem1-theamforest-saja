import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MatchBlogContext } from '../../App';
import './DetailsInfo.css'

const DetailsInfo = () => {
    const param = useParams()
    // console.log(param.id)
    const [blogs, setBlogs] = useContext(MatchBlogContext)
    const exist = blogs.find(blog => blog.idMeal === param.id)
    return (
        <div className='details-info'>
            <h3>Area: {exist?.strArea}</h3>
            <p>{exist?.strIngredient1}</p>
            <p>{exist?.strIngredient2}</p>
            <p>{exist?.strIngredient3}</p>
            <p>{exist?.strIngredient4}</p>
            <p>{exist?.strIngredient5}</p>
            <p>{exist?.strIngredient6}</p>
            <a href={exist?.strYoutube}>Youtube</a>
        </div>
    );
};

export default DetailsInfo;