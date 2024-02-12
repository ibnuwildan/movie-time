import React, { useState } from 'react';
import {Carousel, Image} from 'react-bootstrap';

const CarouselHome = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);

    };
    return (
        <div className='mx-1 py-2'>
       <Carousel activeIndex={index} onSelect={handleSelect} className='text-center'>
      <Carousel.Item>
        <Image src={require("../img/batman.jpeg")} text="First slide" style={{width: "100%"}} />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../img/caco.jpeg")} text="First slide" style={{width: "100%"}}  />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../img/supermen.jpeg")} text="First slide" style={{width: "100%"}}  />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default CarouselHome;