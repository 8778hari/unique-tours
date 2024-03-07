import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import './Carousel.css';

function CarouselImg() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel fade={true} indicators={true} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-500 h-300"
                    src="/images/bklogo.jpg"
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-500 h-300"
                    src="/images/bklogo2.jpg"
                    alt="Second slide"
                />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-500 h-300"
                    src="/images/bklogo3.jpg"
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselImg;