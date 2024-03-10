"use client"

import { useState } from 'react';
import Image from 'next/image';

  interface PictureProps {
    image: string;
  }

  const Picture: React.FC<PictureProps> = ({ image }: PictureProps) => {
    const [isFullSize, setIsFullSize] = useState(false);

  const toggleFullScreen = () => {
    setIsFullSize(!isFullSize);
  };


  return (
    <div>
      {isFullSize ? (
        <div 
        onClick={toggleFullScreen}
        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex items-center justify-center z-50">
          <Image
            src={image}
            alt="Full Size Image"
            className="my-6 cursor-pointer max-h-full max-w-full"
          />
          <button onClick={toggleFullScreen} className="text-white absolute pr-6 top-2 right-2">
            Close
          </button>
        </div>
      ) : (
        <div className="py-2 relative h-96 lg:w-96 flex justify-center items-start">

        <Image
        src={image}
        onClick={toggleFullScreen}
        alt="click for full-size"
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"              
        className="object-cover"
        priority={true}
      />
        </div>
      )}
      </div>
  );
};

export default Picture;


//     <div className="mx-2 max-h-150 h-96 flex items-center relative justify-center my-4 pb-12">

//   <img
//     src={image}
//     onClick={toggleFullScreen}
//     className="h-full w-full object-contain"
//     alt={image}
//   />
// </div>