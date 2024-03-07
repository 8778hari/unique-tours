import CarouselImg from '../carousel/Carousel';
import './HomeBody.css';

export function HomeBody() {
    return (
        <div className='hcontainer'>
            <div className='home_background'></div>
            <div className='home_body'>
                <div className='home_details'>
                    <h1>Discover the beauty of Nature with <span className='logo_name'>Unique Tours and Travels</span></h1>
                    <h3>Experience the India like never before...</h3>
                    <button>Explore</button>
                </div>
                <div className='home_image'>
                    {/* <img src='/images/home1.jpg'></img> */}
                    <CarouselImg />
                </div>
            </div>
            <div className='home_discover'>
                <h1 className='home_dis_title'>Discover Unique Tours and Travels</h1>
                <div className='home_discover_container'>
                    <div className='discover_item'>
                        <img className="discover_item_img" src='/images/vision.jpg' alt='vision'></img>
                        <div className='discover_details'>
                            <h1>Our Vision</h1>
                            <p>At Unique Tours and travels, our vision is to inspire and empower people to explore the india in a meaningful way. We believe that travel has the power to broaden minds, foster cultural exchange, and create lifelong memories. We want to help our clients experience the india in all its beauty and diversity.</p>
                        </div>
                    </div>

                    <div className='discover_item'>
                        <img className="discover_item_img" src='/images/expertise.jpg' alt='discover'></img>
                        <div className='discover_details'>
                            <h1>Our Expertise</h1>
                            <p>Our team of travel experts has decades of combined experience in the industry. We're passionate about travel and we're dedicated to providing our clients with the best possible service. We have a deep knowledge of destinations around the india and we're always on the lookout for new and exciting travel opportunities.</p>
                        </div>
                    </div>

                    <div className='discover_item'>
                        <img className="discover_item_img" src='/images/services.jpg' alt='service'></img>
                        <div className='discover_details'>
                            <h1>Our Services</h1>
                            <p>We offer a wide range of travel services, including luxury travel, adventure travel, group tours, and customized itineraries. We work closely with our clients to create personalized travel experiences that cater to their unique needs and interests. We handle all the details so our clients can relax and enjoy their travels.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home_gallery_container'>
                <h1 className='home_dis_title'>See Unique Tours and Travels in Pictures: A Virutual Tour</h1>
                <div className='home_gallery'>
                    <div className='gallery_item'>
                        <img className='gallery_image' src='images/img1.jpg' alt='img1'></img>
                    </div>
                    <div className='gallery_item'>
                        <img className='gallery_image' src='images/img2.jpg' alt='img2'></img>
                    </div>
                    <div className='gallery_item'>
                        <img className='gallery_image' src='images/img3.jpg' alt='img3'></img>
                    </div>
                    <div className='gallery_item'>
                        <img className='gallery_image' src='images/img4.jpg' alt='img4'></img>
                    </div>
                    <div className='gallery_item'>
                        <img className='gallery_image' src='images/img5.jpg' alt='img5'></img>
                    </div>
                    <div className='gallery_item'>
                        <img className='gallery_image' src='images/img6.jpg' alt='img6'></img>
                    </div>
                    <div className='gallery_item'>
                        <img className='gallery_image' src='images/img7.jpg' alt='img7'></img>
                    </div>
                    <div className='gallery_item'>
                        <img className='gallery_image' src='images/img8.jpg' alt='img8'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}