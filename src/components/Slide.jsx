import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../assets/img-slide/slide1.png"
import slide2 from "../assets/img-slide/slide2.png"
import slide3 from "../assets/img-slide/slide3.png"
import slide4 from "../assets/img-slide/slide4.png"
import slide5 from "../assets/img-slide/slide5.png"



const Slide =() => {
    return (
        <div className="pt-2"> 
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-full h-full"
          src={slide1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-full"
          src={slide2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-full"
          src={slide3}
          alt="Third slide"
        />

</Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-full"
          src={slide4}
          alt="Second slide"
        />

</Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-full"
          src={slide5}
          alt="Second slide"
        />

</Carousel.Item>
    </Carousel>


        </div>
    )
}

export default Slide