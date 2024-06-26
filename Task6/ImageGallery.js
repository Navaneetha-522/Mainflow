import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
    'https://cdn1.matadornetwork.com/blogs/1/2018/02/Taj-Mahal.jpg',
    'https://img.traveltriangle.com/blog/wp-content/uploads/2017/05/Cover1.jpg',
    'https://img.jagranjosh.com/images/2023/October/27102023/redemeer-christ.jpg',  
    'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2011/09/09/cd/seven-wonders-of-the-world.rend.hgtvcom.1280.960.suffix/1491585452004.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiW8uNhqfG1rHsyWaqX1pjmoCEZgPI3sj1NA&s',
    'https://assets.aboutamazon.com/dims4/default/9bced4d/2147483647/strip/true/crop/7968x4482+0+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F4b%2F40%2Fa3a71ae9440aa62b90fda4d50f7d%2Fwbd00468-1.jpg',
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201707/google-campus-main-pic_559_070617104054.jpg',
    'https://media.istockphoto.com/id/529179163/photo/tibet-mount-kailash-north-face.jpg?s=612x612&w=0&k=20&c=ZcDVSIEPZk3q3wIZCWw4lUGwreED1lS1kjWSDTeMqVg=',
    'https://i.ytimg.com/vi/es4x5R-rV9s/maxresdefault.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/ad/eb/cb/this-image-is-valley.jpg?w=1200&h=1200&s=1',
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery-container">
      <div className="image-gallery">
        {images.map((image, index) => (
          <Image key={index} src={image} openModal={openModal} />
        ))}
      </div>
      {selectedImage && <Modal src={selectedImage} closeModal={closeModal} />}
    </div>
  );
}

export default ImageGallery;