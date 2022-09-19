import React from 'react';
import BgImgCard from '../../Card/BgImgCard';
import img1 from '../../../assests/certificate1.png'
import imgbg1 from '../../../assests/blogBg1.jpg';

const Blogs = () => {
    return (
        <div>
            <h1>Blogs</h1>
            <BgImgCard name='Blog Title 1' imgSrc={img1} bgImgSrc={imgbg1} />
        </div>
    )
}

export default Blogs