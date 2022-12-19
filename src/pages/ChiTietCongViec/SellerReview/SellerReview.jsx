import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'

import { DOMAIN_FIVERR, TOKEN } from '../../../util/setting';
import '../SellerReview/SellerReview.css'

export default function SellerReview(props) {

    const [layBinhLuanTheoCV, setLayBinhLuanTheoCV] = useState([])

    useEffect(() => {
        // getAPILayBinhLuanTheoCV()
        let promise = axios({
            method: 'get',
            url: `${DOMAIN_FIVERR}/binh-luan/lay-binh-luan-theo-cong-viec/${props.maCV}`,
            headers: {
                "tokenCybersoft": TOKEN
            }
        });
        promise.then((result) => {
            setLayBinhLuanTheoCV(result.data.content);
        })
        promise.catch((error) => {
            console.log(error.response?.data)
        });
    }, [layBinhLuanTheoCV]);

    let renderBinhLuanTheoCV = () => {
        return layBinhLuanTheoCV.map((item, index) => {
            return <div key={index}>
                <div className='people d-flex mb-5'>
                    <div className='people-avatar mr-3'>
                        <img src={item.avatar} alt="" />
                    </div>
                    <div>
                        <div className='d-flex align-items-center mb-3'>
                            <p style={{ fontWeight: "bold" }}>{item.tenNguoiBinhLuan}</p>
                            <span className='ml-2 mr-2 start-icon'>
                                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                            </span>
                            <p style={{ color: "#ffb33e" }}>{item.saoBinhLuan}</p><br />
                        </div>
                        <div className='people-comment mb-3'>
                            <p>{item.noiDung}</p>
                        </div>
                        <div className='people-comment-time mt-3'>
                            <p>Published {item.ngayBinhLuan}</p>
                        </div>
                        <div className='people-helpful d-flex mt-3' >
                            <div className='Helpful mr-5'>
                                <span className='mr-2'><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path></svg></span>
                                <span style={{ fontWeight: "bold" }}>Helpful</span>
                            </div>
                            <div className='Not Helpful'>
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path></svg>
                                <span style={{ fontWeight: "bold" }}> Not Helpful</span>
                            </div>
                        </div>
                    </div>

                </div>
                <hr width='100%' />
            </div>
        })


    };

    return (
        <Fragment>
            <div className='seller-review mt-5'>
                <div className='review-top d-flex justify-content-between'>
                    <div className='left-review'  >
                        <span className='d-flex' >
                            <span><h3>335 Review</h3></span>
                            <span className='ml-2'>
                                <div className='start-icon mr-1' style={{}}>
                                    <span className='mr-1'>
                                        <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                    </span>
                                    <span className='mr-1'>
                                        <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                    </span>
                                    <span className='mr-1'>
                                        <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                    </span>
                                    <span className='mr-1'>
                                        <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                    </span>
                                    <span className='mr-1'>
                                        <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>
                                    </span>

                                </div>
                            </span>
                            <span className='mr-1' style={{ color: "#ffb33e", fontSize: "25px", lineHeight: "normal" }} >5</span>
                        </span>
                    </div>
                    <div className='right-review d-flex' style={{ alignItems: "center" }}>
                        <p>Sort By <span style={{ fontWeight: "bold" }}>Most relevant</span></p>
                        <p className='dropdown-toggle'>
                        </p>
                    </div>
                </div>

                <div className='review-bottom d-flex'>
                    <div className='review-bottom-left' >
                        <div className='d-flex align-items-center  '>
                            <p className='mr-3' style={{color:'#446ee7'}} > 5 stars</p>
                            <div className='hr-review'>
                                <div className="progress">
                                    <div className="progress-bar bg-warning  " role="progressbar" aria-label="Warning example" style={{ width: '100%' }} />
                                </div>

                            </div>
                            <p className='ml-3'style={{color:'#446ee7'}}  >(333)</p>
                        </div>
                        <div className='d-flex align-items-center '>
                            <p className='mr-3' style={{color:'#446ee7'}}  > 4 stars</p>
                            <div className='hr-review' >
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{ width: '5%' }} />
                                </div>

                            </div>
                            <p className='ml-3' style={{color:'#446ee7'}}  >(2)</p>
                        </div>
                        <div className='d-flex align-items-center '>
                            <p  className='mr-3' style={{color:'#e5e6e7'}}  > 3 stars</p>
                            <div className='hr-review' >
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{ width: '0%' }}/>
                                </div>
                            </div>
                            <p  style={{color:'#e5e6e7'}} className='ml-3'>(0)</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <p  style={{color:'#e5e6e7'}}  className='mr-3' > 2 stars</p>
                            <div className='hr-review' >
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{ width: '0%' }}  />
                                </div>
                            </div>
                            <p  style={{color:'#e5e6e7'}} className='ml-3'>(0)</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <p className='mr-3'  style={{color:'#e5e6e7'}} > 1 stars</p>
                            <div className='hr-review' >
                                <div className="progress">
                                    <div className="progress-bar bg-warning"  role="progressbar" aria-label="Warning example" style={{ width: '0%' }} />
                                </div>
                            </div>
                            <p  style={{color:'#e5e6e7'}} className='ml-3' >(0)</p>
                        </div>
                    </div>
                    <div className='review-bottom-right'>
                        <p style={{ fontWeight: "bold" }}>Rating Breakdown</p>
                        <ul>
                            <li className='d-flex justify-content-around' >
                                <p>Seller communication level</p>
                                <span className='mr-1 start-icon' >
                                    <span>5</span>
                                    <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>

                                </span>

                            </li>
                        </ul>
                        <ul>
                            <li className='d-flex justify-content-around' >
                                <p>Recommend to a friend</p>
                                <span className='mr-1 start-icon' >
                                    <span>5</span>
                                    <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>

                                </span>

                            </li>
                        </ul>
                        <ul>
                            <li className='d-flex justify-content-around' >
                                <p>Service as described</p>
                                <span className='mr-1 start-icon' >
                                    <span>5</span>
                                    <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>

                                </span>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-5'>
                    <h6>Filters</h6>
                    <span className='mt-5'> Industry</span>
                    <span className='ml-3 dropdown-toggle' style={{ fontWeight: "bold" }}>All Industrles</span>
                </div>
                <hr width="100%" />

            </div>

            <div className='people-review mt-5'>
                {renderBinhLuanTheoCV()}
            </div>

        </Fragment>
    )
}
