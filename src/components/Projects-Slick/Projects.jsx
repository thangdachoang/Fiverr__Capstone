import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Projects.css'

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
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1060,
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
                }
            ]
        };

        return (
            <div className="projects-wrapper">
                <div className="projects">
                    <h2>Get inspired with projects made by our freelancers</h2>

                    <Slider {...settings}>
                        <div className="project-item-wrapper">
                            <div className="project-item">
                                <a href="">
                                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png" alt="" />
                                </a>
                                <div className="project-info">
                                    <a href="" className="seller-image">
                                        <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b60be1bf2915ddc1d551eaa252684d7-1589020928117/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg" alt="" />
                                    </a>
                                    <span>
                                        <b>
                                            <a href="">Portraits & Caricatures</a>
                                        </b>
                                        <a href="">by noneyn</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="project-item-wrapper">
                            <div className="project-item">
                                <a href="">
                                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg" alt="" />
                                </a>
                                <div className="project-info">
                                    <a href="" className="seller-image">
                                        <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/23b01eca3b78e2869e149efe15d3066a-1613424545655/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5.jpg" alt="" />
                                    </a>
                                    <span>
                                        <b>
                                            <a href="">Portraits & Caricatures</a>
                                        </b>
                                        <a href="">by noneyn</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="project-item-wrapper">
                            <div className="project-item">
                                <a href="">
                                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615068/mijalzagier.png" alt="" />
                                </a>
                                <div className="project-info">
                                    <a href="" className="seller-image">
                                        <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/23b01eca3b78e2869e149efe15d3066a-1613424545655/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5.jpg" alt="" />
                                    </a>
                                    <span>
                                        <b>
                                            <a href="">Packaging Design</a>
                                        </b>
                                        <a href="">by mijalzagier</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="project-item-wrapper">
                            <div className="project-item">
                                <a href="">
                                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615096/passionshake.jpeg" alt="" />
                                </a>
                                <div className="project-info">
                                    <a href="" className="seller-image">
                                        <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/23b01eca3b78e2869e149efe15d3066a-1613424545655/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5.jpg" alt="" />
                                    </a>
                                    <span>
                                        <b>
                                            <a href="">Product Photography</a>
                                        </b>
                                        <a href="">by passionshake</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="project-item-wrapper">
                            <div className="project-item">
                                <a href="">
                                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png" alt="" />
                                </a>
                                <div className="project-info">
                                    <a href="" className="seller-image">
                                        <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/23b01eca3b78e2869e149efe15d3066a-1613424545655/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5.jpg" alt="" />
                                    </a>
                                    <span>
                                        <b>
                                            <a href="">Web & Mobile Design</a>
                                        </b>
                                        <a href="">by skydesigner</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </Slider>

                    <a className="see-more-link" href="">
                        See More Projects
                        <span>
                            <svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path></svg>
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}
