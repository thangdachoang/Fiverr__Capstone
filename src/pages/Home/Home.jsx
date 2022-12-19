import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import Company from '../../components/Company/Company';
import Services from '../../components/Services-Slick/Services';
import Comment from '../../components/Home-Comment-Slick/Home-Comment-Slick';
import Projects from '../../components/Projects-Slick/Projects';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'
import Footer from '../../components/Footer/Footer';

export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/* <Header /> */}
            <Carousel />
            <Company />
            <Services />

            <div className="whole-world">
                <div className="whole-world-detail row align-items-center">
                    <div className="col-12 col-lg-6 left">
                        <h2>A whole world of freelance talent at your fingertips</h2>
                        <ul>
                            <li>
                                <h6 className='d-flex'>
                                    <span className="XQskgrQ check-icon" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(122, 125, 133)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>
                                    The best for every budget
                                </h6>
                                <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                            </li>
                            <li>
                                <h6 className='d-flex'>
                                    <span className="XQskgrQ check-icon" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(122, 125, 133)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>
                                    Quality work done quickly
                                </h6>
                                <p>Find the right freelancer to begin working on your project within minutes.</p>
                            </li>
                            <li>
                                <h6 className='d-flex'>
                                    <span className="XQskgrQ check-icon" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(122, 125, 133)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>
                                    Protected payments, every time
                                </h6>
                                <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                            </li>
                            <li>
                                <h6 className='d-flex'>
                                    <span className="XQskgrQ check-icon" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(122, 125, 133)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>
                                    24/7 support
                                </h6>
                                <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg-6 right">
                        <div className="video-modal" onClick={() => setOpen(true)} >
                            <img className='img-fluid' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="hình ảnh" />
                        </div>
                        <ModalVideo isOpen={isOpen} url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" channel='custom' onClose={() => setOpen(false)} />
                    </div>
                </div>
            </div>

            <div className="marketplace">
                <h2>Explore the marketplace</h2>
                <ul className='row row-cols-md-5'>
                    <li className='col-6 col-sm-4'>
                        <a href="">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="Graphics & Design" loading='lazy' />
                            Graphics & Design
                        </a>
                    </li>
                    <li className='col-6 col-sm-4'>
                        <a href="">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg" alt="Digital Marketing" />
                            Digital Marketing
                        </a>
                    </li>
                    <li className='col-6 col-sm-4'>
                        <a href="">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg" alt="Writing & Translation" />
                            Writing & Translation
                        </a>
                    </li>
                    <li className='col-6 col-sm-4'>
                        <a href="">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg" alt="Video & Animation" />
                            Video & Animation
                        </a>
                    </li>
                    <li className='col-6 col-sm-4'>
                        <a href="">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg" alt="Music & Audio" />
                            Music & Audio
                        </a>
                    </li>
                    <li className='col-6 col-sm-4'>
                        <a href="">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg" alt="Programming & Tech" />
                            Programming & Tech
                        </a>
                    </li>
                    <li className='col-6 col-sm-4'>
                        <a href="">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg" alt="Business" />
                            Business
                        </a>
                    </li>
                    <li className='col-6 col-sm-4'>
                        <a href="">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg" alt="Lifestyle" />
                            Lifestyle
                        </a>
                    </li>
                    <li className='col-6 col-sm-4'>
                        <a href="">
                            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg" alt="Data" />
                            Data
                        </a>
                    </li>
                </ul>
            </div>

            <div className="business">
                <div className="business-detail row align-items-center">
                    <div className="col-12 col-md-6 left">
                        <small>
                            <i className='fiverr-business-logo'>
                                <svg viewBox="0 0 219 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M81.6,13.1h-3.1c-2,0-3.1,1.5-3.1,4.1v9.3h-6V13.1h-2.5c-2,0-3.1,1.5-3.1,4.1v9.3h-6V8.1h6v2.8 c1-2.2,2.3-2.8,4.3-2.8h7.3v2.8c1-2.2,2.3-2.8,4.3-2.8h2L81.6,13.1z M56.4,18.7H44c0.3,2.1,1.6,3.2,3.7,3.2 c1.6,0,2.7-0.7,3.1-1.8l5.3,1.5c-1.3,3.2-4.5,5.1-8.4,5.1c-6.5,0-9.5-5.1-9.5-9.5c0-4.3,2.6-9.4,9.1-9.4c6.9,0,9.2,5.2,9.2,9.1 C56.5,17.8,56.5,18.3,56.4,18.7z M50.7,15.2c-0.1-1.6-1.3-3-3.3-3c-1.9,0-3,0.8-3.4,3H50.7z M27.8,26.5H33l6.6-18.3h-6l-3.2,10.7 L27.2,8.1h-6L27.8,26.5z M3.4,26.5h5.9V13.1H15v13.4h5.9V8.1H9.3V7c0-1.2,0.9-2,2.2-2H15V0h-4.4C6.3,0,3.4,2.7,3.4,6.6v1.5H0v5 h3.4L3.4,26.5z"></path><path d="M91.7,23.7v2.7h-3.5V0h3.5v10.8c1.1-1.8,3.3-3,5.8-3c5.6,0,8.7,4,8.7,9.4s-3.2,9.4-8.8,9.4 C95,26.7,92.8,25.5,91.7,23.7z M102.6,17.3c0-3.8-2.2-6.4-5.6-6.4c-3.4,0-5.6,2.5-5.6,6.4s2.2,6.4,5.6,6.4 C100.4,23.6,102.6,21.1,102.6,17.3z"></path><path d="M123.5,26.4H120v-3.2c-1,2.3-3.2,3.5-5.9,3.5c-4.1,0-6.8-3-6.8-7.3V8.1h3.5v10.6c0,2.9,1.7,4.9,4.3,4.9 c2.9,0,4.9-2.3,4.9-5.5V8.1h3.5L123.5,26.4z"></path><path d="M125,20.5h3.2c0.3,2.2,1.7,3.4,4.2,3.4c2.1,0,3.5-1.1,3.5-2.5c0-5-10.5-0.4-10.5-8.3c0-3.1,2.7-5.2,6.5-5.2 c4.1,0,6.9,2.3,7.1,5.7h-3.2c-0.3-2.1-2.3-2.9-3.9-2.9c-2,0-3.3,0.9-3.3,2.4c0,4.6,10.5-0.1,10.5,8.2c0,3.3-2.7,5.5-6.8,5.5 C128.1,26.7,125.2,24.3,125,20.5z"></path><path d="M144.5,8.1H141v18.3h3.5V8.1z"></path><path d="M147.1,8.1h3.5v3.2c1-2.3,3.2-3.5,5.9-3.5c4.1,0,6.8,3,6.8,7.3v11.3h-3.5V15.8c0-2.9-1.7-4.9-4.3-4.9 c-2.9,0-4.9,2.3-4.9,5.5v9.9H147L147.1,8.1z"></path><path d="M182.9,20.5h3.2c0.3,2.2,1.7,3.4,4.2,3.4c2.1,0,3.5-1.1,3.5-2.5c0-5-10.5-0.4-10.5-8.3 c0-3.1,2.7-5.2,6.5-5.2c4.1,0,6.9,2.3,7.1,5.7h-3.2c-0.3-2.1-2.3-2.9-3.9-2.9c-2,0-3.3,0.9-3.3,2.4c0,4.6,10.5-0.1,10.5,8.2 c0,3.3-2.7,5.5-6.8,5.5C186,26.7,183.2,24.3,182.9,20.5z"></path><path d="M178.7,20.5c-0.5,2.1-2.3,3.2-4.9,3.2c-3.2,0-5.4-2.4-5.7-5.8h14c0-0.3,0.1-0.9,0.1-1.4c0-4.6-3-8.7-8.7-8.7 c-5.6,0-8.8,4.2-8.8,9.3c0,5.1,3.5,9.6,9.2,9.6c4.1,0,7.2-2.1,8.2-5.3L178.7,20.5z M173.4,10.7c3,0,4.9,1.9,5.1,4.6h-10.4 C168.7,12.2,170.5,10.7,173.4,10.7z"></path><path d="M198.1,20.5h3.2c0.3,2.2,1.7,3.4,4.2,3.4c2.1,0,3.5-1.1,3.5-2.5c0-5-10.5-0.4-10.5-8.3 c0-3.1,2.7-5.2,6.5-5.2c4.1,0,6.9,2.3,7.1,5.7h-3.2c-0.3-2.1-2.3-2.9-3.9-2.9c-2,0-3.3,0.9-3.3,2.4c0,4.6,10.5-0.1,10.5,8.2 c0,3.3-2.7,5.5-6.8,5.5C201.2,26.7,198.3,24.3,198.1,20.5z"></path><path d="M142.7,0c-0.6,0-1.1,0.2-1.6,0.7c-0.4,0.4-0.7,1-0.7,1.6c0,0.6,0.2,1.1,0.7,1.6c0.5,0.4,1,0.7,1.6,0.7 c0.6,0,1.1-0.2,1.6-0.7c0.4-0.5,0.7-1,0.7-1.6c0-0.3-0.1-0.6-0.2-0.9s-0.3-0.5-0.5-0.8c-0.2-0.2-0.5-0.4-0.7-0.5 C143.4,0.1,143.1,0,142.7,0z"></path><path d="M218.3,24.4L218.3,24.4c0,0.6-0.2,1.2-0.7,1.6c-0.4,0.4-1,0.7-1.6,0.7c-0.6,0-1.2-0.2-1.6-0.7 c-0.4-0.4-0.7-1-0.7-1.6v0c0-0.6,0.2-1.2,0.7-1.6c0.4-0.4,1-0.7,1.6-0.7c0.6,0,1.2,0.2,1.6,0.7C218.1,23.2,218.3,23.8,218.3,24.4z"></path></g></svg>
                                <span>New</span>
                            </i>
                        </small>
                        <h2>
                            <span>A business solution designed for </span>
                            <i>teams</i>
                        </h2>
                        <ul>
                            <li className='d-flex'>
                                <span className="XQskgrQ check-icon" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(122, 125, 133)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>
                                Connect to freelancers with proven business experience
                            </li>
                            <li className='d-flex'>
                                <span className="XQskgrQ check-icon" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(122, 125, 133)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>
                                Get matched with the perfect talent by a customer success manager
                            </li>
                            <li className='d-flex'>
                                <span className="XQskgrQ check-icon" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(122, 125, 133)' }}><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg></span>
                                Manage teamwork and boost productivity with one powerful workspace
                            </li>
                        </ul>
                        <a className='explore' href="">Explore Fiverr Business</a>
                    </div>

                    <div className="col-12 col-md-6 right">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="Fiverr Business freelancers" />
                    </div>
                </div>
            </div>

            <Comment />

            <div className="logo-maker-wrapper">
                <div className="logo-maker d-flex">
                    <div className="left">
                        <small>
                            <i>
                                <svg viewBox="0 0 249 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#FFFFFF"><path d="M81.6,13.1h-3.1c-2,0-3.1,1.5-3.1,4.1v9.3h-6V13.1h-2.5c-2,0-3.1,1.5-3.1,4.1v9.3h-6V8.1h6v2.8 c1-2.2,2.3-2.8,4.3-2.8h7.3v2.8c1-2.2,2.3-2.8,4.3-2.8h2L81.6,13.1z M56.4,18.7H44c0.3,2.1,1.6,3.2,3.7,3.2 c1.6,0,2.7-0.7,3.1-1.8l5.3,1.5c-1.3,3.2-4.5,5.1-8.4,5.1c-6.5,0-9.5-5.1-9.5-9.5c0-4.3,2.6-9.4,9.1-9.4c6.9,0,9.2,5.2,9.2,9.1 C56.5,17.8,56.5,18.3,56.4,18.7z M50.7,15.2c-0.1-1.6-1.3-3-3.3-3c-1.9,0-3,0.8-3.4,3H50.7z M27.8,26.5H33l6.6-18.3h-6l-3.2,10.7 L27.2,8.1h-6L27.8,26.5z M3.4,26.5h5.9V13.1H15v13.4h5.9V8.1H9.3V7c0-1.2,0.9-2,2.2-2H15V0h-4.4C6.3,0,3.4,2.7,3.4,6.6v1.5H0v5 h3.4L3.4,26.5z"></path><path d="M88.4,0h3.5v26.6h-3.5V0z"></path><path d="M93.6,17.5c0-5.5,3.9-9.4,9.4-9.4c5.5,0,9.4,3.9,9.4,9.4s-3.9,9.4-9.4,9.4C97.5,26.9,93.6,23,93.6,17.5z M108.8,17.5c0-3.7-2.4-6.3-5.8-6.3c-3.5,0-5.8,2.6-5.8,6.3s2.4,6.3,5.8,6.3C106.4,23.8,108.8,21.2,108.8,17.5z"></path><path d="M130.1,28.3c0,3.3-2.1,5.7-5.6,5.7h-5.6c-3.8,0-5.8-2.2-5.8-5.4c0-1.5,0.8-2.9,1.9-3.7 c-0.9-0.7-1.4-1.6-1.4-2.8c0-1.5,0.9-2.5,2.2-3.8c-0.8-1-1.2-2.4-1.2-3.8c0-3.8,3-6.3,7-6.3c1,0,2,0.2,2.9,0.5l2.5-2.9l2.2,2 l-2.2,2.5c1,1.1,1.6,2.6,1.6,4.1c0,3.8-3,6.3-7,6.3c-1.3,0-2.5-0.3-3.5-0.7c-0.7,0.8-1,1.2-1,1.8c0,1,0.9,1.5,2,1.5h5.1 C127.6,23.3,130.1,24.9,130.1,28.3z M126.7,28.5c0-1.7-1.1-2.5-2.9-2.5h-4.2c-0.6,0-1.2,0-1.8-0.1c-0.9,0.7-1.2,1.6-1.2,2.6 c0,1.5,1,2.6,2.5,2.6h5.4C126.1,31.1,126.7,30,126.7,28.5z M117.9,14.4c0,2.2,1.7,3.5,3.7,3.5c2,0,3.7-1.3,3.7-3.5 c0-2.2-1.7-3.5-3.7-3.5C119.6,10.9,117.9,12.2,117.9,14.4z"></path><path d="M130.2,17.5c0-5.5,3.9-9.4,9.4-9.4c5.5,0,9.4,3.9,9.4,9.4s-3.9,9.4-9.4,9.4C134.2,26.9,130.2,23,130.2,17.5z M145.4,17.5c0-3.7-2.4-6.3-5.8-6.3c-3.5,0-5.8,2.6-5.8,6.3s2.4,6.3,5.8,6.3C143.1,23.8,145.4,21.2,145.4,17.5z"></path><path d="M155,8.4h3.5v3.3c0.8-2.1,2.7-3.5,5.4-3.5c3,0,5.2,1.3,5.9,3.7c0.7-2.1,3.1-3.7,5.9-3.7 c3.9,0,6.4,2.7,6.4,6.9v11.6h-3.5V16c0-2.9-1.5-4.8-3.9-4.8c-2.8,0-4.5,2-4.5,4.8v10.6h-3.5V16c0-2.9-1.5-4.8-3.8-4.8 c-2.8,0-4.5,2-4.5,4.8v10.6H155V8.4z"></path><path d="M199.3,14.7v11.9h-3.4v-3c-0.9,2-3.2,3.3-5.9,3.3c-3.7,0-6.2-2.3-6.2-5.5c0-3.7,2.4-5.9,7.1-5.9h3.9 c0.7,0,1.1-0.4,1.1-1v-0.1c0-2.2-2-3.6-4.5-3.6s-4.3,1.6-4.5,3.5h-3.2c0.3-3.6,3.5-6.3,7.6-6.3C195.9,8.1,199.3,10.7,199.3,14.7z M195.9,18.6v-0.5h-4.7c-2.8,0-3.9,1.2-3.9,3.3c0,1.6,1.5,2.8,3.4,2.8C193.9,24.1,195.9,22,195.9,18.6z"></path><path d="M207,17.9l-2.3,2.1v6.6h-3.5V0h3.5v15.6l8-7.2h4.5l-7.7,7.1l8.4,11.1h-4.3L207,17.9z"></path><path d="M243.2,11.4c-3.3,0-4.4,3-4.4,6.9v8.3h-3.5V8.4h3.5v3.5c0.8-2.4,2.3-3.5,4.8-3.5h2.2v3H243.2z"></path><path d="M230.4,20.7c-0.5,2.1-2.2,3.2-4.9,3.2c-3.2,0-5.4-2.4-5.7-5.8h13.9c0-0.3,0.1-0.9,0.1-1.4 c0-4.6-3-8.6-8.6-8.6c-5.6,0-8.8,4.2-8.8,9.3c0,5.1,3.5,9.5,9.2,9.5c4.1,0,7.2-2.1,8.2-5.3L230.4,20.7L230.4,20.7z M225.2,10.9 c3,0,4.9,1.8,5.1,4.6h-10.4C220.5,12.5,222.3,10.9,225.2,10.9z"></path><path d="M248.8,24.6L248.8,24.6c0,0.6-0.2,1.2-0.7,1.7c-0.4,0.4-1,0.7-1.6,0.7c-0.3,0-0.6-0.1-0.9-0.2 c-0.3-0.1-0.5-0.3-0.7-0.5c-0.2-0.2-0.4-0.5-0.5-0.7c-0.1-0.3-0.2-0.6-0.2-0.9v0c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.5-0.7 c0.2-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.6-0.2,0.9-0.2c0.6,0,1.2,0.2,1.6,0.7C248.6,23.4,248.8,24,248.8,24.6z"></path></g></svg>
                            </i>
                        </small>
                        <h2 className='title'>
                            Make an incredible logo
                            <br />
                            <i>in minutes</i>
                        </h2>
                        <div className="depscription">Pre-designed by top talent. Just add your touch.</div>
                        <a href="">Try Fiverr Logo Maker</a>
                    </div>

                    <div className="background-logo-maker">
                    </div>
                </div>
            </div>

            <Projects />

            <div className="guides">
                <h2>Fiverr guides</h2>
                <a className="see-more-link" href="">
                    See More Guides
                    <span>
                        <svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path></svg>
                    </span>
                </a>
                <div className="row">
                    <a className="col-12 col-md-6 col-lg-4">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png" alt="" />
                        <h6>Start an online business and work from home</h6>
                        <p>A complete guide to starting a small business online</p>
                    </a>

                    <a className="col-12 col-md-6 col-lg-4">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png" alt="" />
                        <h6>Digital marketing made easy</h6>
                        <p>A practical guide to understand what is digital marketing</p>
                    </a>

                    <a className="col-12 col-md-6 col-lg-4">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png" alt="" />
                        <h6>Create a logo for your business</h6>
                        <p>A step-by-step guide to create a memorable business logo</p>
                    </a>
                </div>

                <div className="signup">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" alt="" />

                    <div className="signup-text">
                        <h2>
                            <span>
                            Find the <i>talent</i> needed to get your business <i>growing</i>
                            </span>
                        </h2>
                        <a href="">Get Started</a>
                    </div>
                </div>
            </div>

            {/* <Footer/> */}

          

        </>
    )
}
