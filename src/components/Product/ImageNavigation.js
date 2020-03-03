import React, { useState } from 'react';

//Assets
import PlayBtn from '../../assets/video_play.png'
import Arrow from '../../assets/arrow.png'

const ImageNavigation = ({product: { images }}) => {
    const [currentImage, setImage] = useState(0)
    return (
        <div className='ImageNavigation d-flex mar-r-106'>
            <div className="mar-r-64">
                <span className="c-orange s-12 d-flex fdir-column a-center">
                    Video
                    <img src={PlayBtn}/>
                </span>
                <div className="d-flex fdir-column a-center">
                    <img className="arrow mar-v-20" src={Arrow}/>
                    {images.map((image, index) => <img onClick={() => setImage(index)} key={index} className={`product-nav-item ${currentImage === index ? "active" : "inactive"} clickable`} src={image}/>)}
                    <img className="arrow mar-v-20 rotate-180" src={Arrow}/>
                </div>
            </div>
            <img className="image-display" src={images[currentImage]}/>
        </div>
    )
}

export default ImageNavigation;