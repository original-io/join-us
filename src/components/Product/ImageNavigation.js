import React from 'react';

//Assets
import ProductImage from '../../assets/prodImage.png'
import PlayBtn from '../../assets/video_play.png'
import Arrow from '../../assets/arrow.png'

const ImageNavigation = () => {

    return (
        <div className='ImageNavigation d-flex mar-r-106'>
            <div className="mar-r-64">
                <span className="c-orange s-12 d-flex fdir-column a-center">
                    Video
                    <img src={PlayBtn}/>
                </span>
                <div className="d-flex fdir-column a-center">
                    <img className="mar-v-20" src={Arrow}/>
                    {[...Array(4)].map((item, index) => <img key={index} className="product-nav-item" src={ProductImage}/>)}
                    <img className="mar-v-20 rotate-180" src={Arrow}/>
                </div>
            </div>
            <img src={ProductImage}/>
        </div>
    )
}

export default ImageNavigation;