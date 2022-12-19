import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Services.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },

            ]
        };

        return (
            <div className="services">
                <h2>Popular professional services</h2>
                <Slider {...settings}>
                    <div className="sv-item">
                        <a href="">
                            <h4>
                                <small>Build your brand</small>
                                Logo Design
                            </h4>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" alt="" />
                        </a>
                    </div>
                    <div className="sv-item">
                        <a href="">
                            <h4>
                                <small>Customize your site</small>
                                WordPress
                            </h4>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png" alt="" />
                        </a>
                    </div>
                    <div className="sv-item">
                        <a href="">
                            <h4>
                                <small>Share your message</small>
                                Voice Over
                            </h4>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png" alt="" />
                        </a>
                    </div>
                    <div className="sv-item">
                        <a href="">
                            <h4>
                                <small>Engage your audience</small>
                                Video Explainer
                            </h4>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" alt="" />
                        </a>
                    </div>
                    <div className="sv-item">
                        <a href="">
                            <h4>
                                <small>Reach more customers</small>
                                Social Media
                            </h4>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png" alt="" />
                        </a>
                    </div>
                    <div className="sv-item">
                        <a href="">
                            <h4>
                                <small>Unlock growth online</small>
                                SEO
                            </h4>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png" alt="" />
                        </a>
                    </div>
                    <div className="sv-item">
                        <a href="">
                            <h4>
                                <small>Color your dreams</small>
                                Illustration
                            </h4>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png" alt="" />
                        </a>
                    </div>
                    <div className="sv-item">
                        <a href="">
                            <h4>
                                <small>Go global</small>
                                Translation
                            </h4>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png" alt="" />
                        </a>
                    </div>
                    <div className="sv-item">
                        <a href="">
                            <h4>
                                <small>Learn your business</small>
                                Data Entry
                            </h4>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png" alt="" />
                        </a>
                    </div>
                    <div className="sv-item">
                        <a href="">
                            <h4>
                                <small>Showcase your story</small>
                                Book Covers
                            </h4>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png" alt="" />
                        </a>
                    </div>
                </Slider>
            </div>
        );
    }
}
