import './style.css';
import useEmblaCarousel from 'embla-carousel-react'
import image from '../../images/image.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'
import image5 from '../../images/image5.jpg'
import image6 from '../../images/image6.jpg'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'


export function Slider(){
    const [emblaRef] = useEmblaCarousel()

    return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"><img src={image} alt="" /></div>
          <div className="embla__slide"><img src={image2} alt="" /></div>
          <div className="embla__slide"><img src={image3} alt="" /></div>
          <div className="embla__slide"><img src={image4} alt="" /></div>
          <div className="embla__slide"><img src={image5} alt="" /></div>
          <div className="embla__slide"><img src={image6} alt="" /></div>
        </div>
          <div className='setas'>
            <AiOutlineArrowLeft/>
            <h3>Arraste</h3>
          <AiOutlineArrowRight/>
          </div>
      </div>
    )
}