import  { useState } from 'react';
import { FaRegCircleXmark } from "react-icons/fa6";

// Import your images
import img from '../assets/1.jpg';
import img1 from '../assets/2.jpg';
import img2 from '../assets/3.jpg';
import img3 from '../assets/4.jpg';
import img4 from '../assets/5.jpg';
import img5 from '../assets/6.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle click on an image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to handle closing the preview
  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div id="gallery" className='font-montserrat'>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 py-5">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-screen-lg">
        {[
          { src: img, alt: 'Image 1' },
          { src: img1, alt: 'Image 2' },
          { src: img2, alt: 'Image 3' },
          { src: img3, alt: 'Image 4' },
          { src: img4, alt: 'Image 5' },
          { src: img5, alt: 'Image 6' },
        ].map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image)}>
            <img className="h-auto max-w-full rounded-lg" src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      {/* Modal for image preview */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
          <div className="max-w-3xl w-full p-4 bg-white rounded-lg relative">
            <button className="absolute top-2 right-2 text-gray-900" onClick={handleClosePreview}><FaRegCircleXmark className='w-10 h-8' /></button>
            <img className="max-w-full h-auto" src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
