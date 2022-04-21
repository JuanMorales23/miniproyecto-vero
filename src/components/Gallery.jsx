import React from 'react'
import NavbarIndex from './NavbarIndex'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import images from './assets/js/Images';
import '../components/assets/css/Gallery.css'

const Gallery = () => {
    return (
        <div className='index'>
            <NavbarIndex />
            <div className='separate'>
                <ImageGallery items={images} showIndex={true}/>
            </div>
        </div>
    )
}

export default Gallery