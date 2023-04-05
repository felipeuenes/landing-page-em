import './style.css';
import useEmblaCarousel from 'embla-carousel-react'
import image from '../../images/image.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'



export function Slider(){
    const [emblaRef] = useEmblaCarousel()

    return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"><img src={image} alt="" /></div>
          <div className="embla__slide"><img src={image2} alt="" /></div>
          <div className="embla__slide"><img src={image3} alt="" /></div>
          <div className="embla__slide"><img src={image4} alt="" /></div>
        </div>
      </div>
    )
}