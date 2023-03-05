import React from 'react';
import image1 from '../assets/images/pexels-engin-akyurt-1571738.jpg'
import image2 from '../assets/images/pexels-fox-1217324.jpg'
import image3 from '../assets/images/pexels-joy-singh-2764942.jpg'
import image4 from '../assets/images/pexels-sevenstorm-juhaszimrus-425183.jpg'

const imageComponent = ({ setbgImage }) => {

    const imageContent = [
        { id: 1, img: image1 },
        { id: 2, img: image2 },
        { id: 3, img: image3 },
        { id: 4, img: image4 }
    ]
    return (

        <div className='grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2 mt-20 w-5/6 mx-auto'>
            {
                imageContent.map(image => <div onClick={() => setbgImage(image.img)}>
                    <img src={image.img} alt="" className='md:h-[180px] h-[100px] w-full rounded-lg' />
                </div>
                )
            }
        </div>

    );
};

export default imageComponent;