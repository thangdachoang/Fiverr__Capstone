import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { DOMAIN_FIVERR, TOKEN } from '../../util/setting'
import './CongViec.css'


export default function CongViec(props) {

    const [mangCV, setMangCV] = useState([]);

    let searchInfo = props.match.params.congviectimkiem;
    let maChiTietLoai = props.match.params.machitietloai;

    //! call API search công việc
    useEffect(() => {
        let promise = axios({
            method: 'get',
            url: `${DOMAIN_FIVERR}/cong-viec/lay-danh-sach-cong-viec-theo-ten/${searchInfo}`,
            headers: {
                "TokenCybersoft": TOKEN,
            }
        });
        promise.then((result) => {
            
            setMangCV(result.data.content)
        });
        promise.catch(error => {
            console.log(error.response?.data);
        });
    }, [])

    //! call API theo chi tiết loại trên header
    useEffect(() => {
        let promise = axios({
            method: 'get',
            url: `${DOMAIN_FIVERR}/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maChiTietLoai}`,
            headers: {
                "TokenCybersoft": TOKEN,
            }
        });
        promise.then((result) => {
            setMangCV(result.data.content)
        });
        promise.catch(error => {
            console.log(error.response?.data);
        });
    }, [])



    //! render mảng search công việc
    let reanderMangSearchCV = () => {
        if (mangCV.length > 0) {
            return <div className="job-detail">
                {mangCV.map(cv => {
                    return <div className="job-detail-item" key={cv.id}>
                        <a href={`/chitietcongviec/${cv.id}`}>
                            <img className='img-fluid' src={cv.congViec.hinhAnh} alt="" />
                        </a>

                        <div className="seller-info">
                            <span className='seller-image'>
                                <span className='is-online'></span>
                                <div className="avatar">
                                    <img src={cv.avatar} alt="" />
                                </div>
                            </span>

                            <div className="seller-identifiers">
                                <div className="seller-nickname">
                                    <a href={`/chitietcongviec/${cv.id}`}>{cv.tenNguoiTao}</a>
                                </div>
                                <span className='level-seller'>Level 2 Seller</span>
                            </div>
                        </div>

                        <h3 className='description'>
                            <a href={`/chitietcongviec/${cv.id}`}>{cv.congViec.tenCongViec}</a>
                        </h3>

                        <div className="star-rate">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                            {cv.congViec.saoCongViec}
                            <span>({cv.congViec.danhGia})</span>
                        </div>

                        <div className="footer-item">
                            <button className='heart-icon'>
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path></svg>
                                </span>
                            </button>

                            <a href="">
                                <small>Starting at</small>
                                <span>${cv.congViec.giaTien}</span>
                            </a>
                        </div>

                    </div>
                })}
            </div>
        } else {
            return <div className='job-no-search'>
                <div className="error-image">
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/apps/empty-search-results.229c0d3.png" alt="" />
                    <small>
                        <span>Made on Fiverr <br /> by </span>
                        <b>onekaa</b>
                    </small>
                </div>

                <h2>No Services Found For Your Search</h2>
                <p>Please try a new search or explore our variety of freelance services.</p>
                <a href="">Explore Services</a>
            </div>
        }
    }

    return (
        <>
            <Header />
            <header className='related-search'>
                <nav className='layout-row'>
                    <b>Suggested</b>
                    <div className="search-tags">
                        <a href="#">web design</a>
                        <a href="#">web developer</a>
                        <a href="#">website</a>
                        <a href="#">web development</a>
                        <a href="#">website development</a>
                        <a href="#">web site</a>
                        <a href="#">pagina web</a>
                    </div>
                </nav>
            </header>

            <div className="results-search">
                <span>Results for "{searchInfo}"</span>
            </div>

            <div className="topbar">
                <div className="shadow-effect">
                    <div className="floating-top-bar">
                        <div className="top-filters">
                            <button>
                                Category
                                <span className='chevron-icon-down'>
                                    <svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path></svg>
                                </span>
                            </button>
                            <button>
                                Seller Details
                                <span className='chevron-icon-down'>
                                    <svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path></svg>
                                </span>
                            </button>
                            <button>
                                Budget
                                <span className='chevron-icon-down'>
                                    <svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path></svg>
                                </span>
                            </button>
                            <button>
                                Delivery Time
                                <span className='chevron-icon-down'>
                                    <svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path></svg>
                                </span>
                            </button>

                        </div>

                        <div className="on-off">
                            <div className="tool-tip">
                                <label>
                                    <input type="checkbox" value={false} />
                                    <span></span>
                                </label>
                                Pro services
                            </div>
                            <div className="tool-tip">
                                <label>
                                    <input type="checkbox" value={false} />
                                    <span></span>
                                </label>
                                Local sellers
                            </div>
                            <div className="tool-tip">
                                <label>
                                    <input type="checkbox" value={false} />
                                    <span></span>
                                </label>
                                Online sellers
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-available">
                <div className="results-info">
                    <span>78,567 services available</span>
                </div>

                <div className="sort-by-wrapper">
                    <span>Sort by</span>
                    <div className="floating-menu">
                        Relevance
                        <span>
                            <svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"><path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path></svg>
                        </span>
                    </div>
                </div>
            </div>

            <div className="job-detail-wrapper">
                {reanderMangSearchCV()}
            </div>

            <Footer />
        </>
    )

}

















