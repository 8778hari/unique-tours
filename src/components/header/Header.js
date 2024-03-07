import './Header.css';
import Dropdown from 'react-bootstrap/Dropdown';

export function Header() {
    return (
        <div className='head'>
            <div className="head_background"></div>
            <div className='header_container'>
                <div className='head_image '>
                    <img src="/images/logo.png" alt='text'></img>
                </div>
                <div className='nav'>
                    <div className='nav_item'>
                        <a href='/home'>Home</a>
                    </div>
                    <div className='nav_item'>
                        <a href='/about'>About Us</a>
                    </div>
                    <div className='nav_item'>
                        <a href='/contact'>Contact Us</a>
                    </div>
                    <div className='nav_item'>
                        <a href='/gallery'>Gallery</a>
                    </div>
                    <div className='nav_item'>
                        <a href='/packages'>Packages</a>
                    </div>
                    <div className='nav_item'>
                        <a href='/services'>Services</a>
                    </div>
                </div>
                <div className='nav_drop'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/home">Home</Dropdown.Item>
                            <Dropdown.Item href="/about">About Us</Dropdown.Item>
                            <Dropdown.Item href="/contact">Contact Us</Dropdown.Item>
                            <Dropdown.Item href="/gallery">Gallery</Dropdown.Item>
                            <Dropdown.Item href="/packages">Packages</Dropdown.Item>
                            <Dropdown.Item href="/services">Services</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

