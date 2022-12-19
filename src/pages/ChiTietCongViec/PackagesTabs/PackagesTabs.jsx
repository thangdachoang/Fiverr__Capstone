import axios from 'axios';
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { ACCESS_TOKEN, DOMAIN_FIVERR, TOKEN, USERLOGIN } from '../../../util/setting';
import '../PackagesTabs/PackagesTabs.css'

export default function PackagesTabs(props) {

    let handleSubmit = () => {
        if (!localStorage.getItem(USERLOGIN)) {
            props.props.history.push("/login");
        }

        const date = new Date();
        const year = date.getFullYear();
        // 👇️ getMonth returns integer from 0(January) to 11(December)
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const withSlashes = [day, month, year].join('/');

        let promise = axios({
            method: 'post',
            url: `${DOMAIN_FIVERR}/thue-cong-viec`,
            data: {
                // "id": 0,
                "maCongViec": props.maCV,
                "maNguoiThue": props.uLogin.user.id,
                "ngayThue": `${withSlashes}`,
                "hoanThanh": false
            },
            headers: {
                "tokenCybersoft": TOKEN,
                "token": localStorage.getItem(ACCESS_TOKEN)
            }
        });
        promise.then((result) => {
            alert('Thuê công việc thành công')
            console.log("Thuê công việc thành công", result.data.content)
            props.props.history.push("/");
        });
        promise.catch(error => {
            console.log(error.response?.data);
        });
    }

    return <div className='packagestabs mt-5 mb-5 ' >
        <ul className="nav nav-tabs d-flex" id="myTab" role="tablist">
            <li className="nav-item " role="presentation">
                <button className="nav-link active " id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Basic</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Standard</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Premium</button>
            </li>
        </ul>
        <div className="tab-content container mt-4" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className='d-flex justify-content-between m-4'>
                    <div className="">
                        <h6 className='titleApplication'>Basic Application</h6>
                    </div>
                    <div className="">
                        <p>${props.layCVChiTietTheoMaCV?.congViec.giaTien}</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <p>App With 3 - 5 Pages Offline Database No Online Backend No Payment Gateway</p>
                </div>
                <div className='mt-5'>
                    <ul className='flex-column delivery-wrapper'>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg> {Math.floor(Math.random() * 10)}  Days Delivery
                        </li>

                        <li>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Functional app
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>1 operating system
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>App submission
                        </li>
                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>App icon
                        </li>
                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Splash screen</li>

                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Ad network integration</li>
                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Source code</li>

                    </ul>
                </div>

                <button onClick={handleSubmit} className='btn btn-success btn-block mt-5' >Continue (${props.layCVChiTietTheoMaCV?.congViec.giaTien})</button>

            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className='d-flex justify-content-between m-4'>
                    <div className="">
                        <h6 className='titleApplication'>Standard Application</h6>
                    </div>
                    <div className="">
                        <p>${props.layCVChiTietTheoMaCV?.congViec.giaTien*2}</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <p>App With 3 - 5 Pages Offline Database No Online Backend No Payment Gateway</p>
                </div>
                <div className='mt-5'>
                    <ul className='flex-column delivery-wrapper '>
                        <li className=''>
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg> {Math.floor(Math.random() * 10) + 10}  Days Delivery
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Functional app
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>1 operating system
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>App submission
                        </li>
                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>App icon
                        </li>
                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Splash screen</li>

                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Ad network integration</li>
                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Source code</li>

                    </ul>
                </div>

                <button onClick={handleSubmit} className='btn btn-success btn-block mt-5' >Continue (${props.layCVChiTietTheoMaCV?.congViec.giaTien*2})</button>
            </div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className='d-flex justify-content-between m-4'>
                    <div className="">
                        <h6 className='titleApplication'>Premium Application</h6>
                    </div>
                    <div className="">
                        <p>${props.layCVChiTietTheoMaCV?.congViec.giaTien*3}</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <p>App With 3 - 5 Pages Offline Database No Online Backend No Payment Gateway</p>
                </div>
                <div className='mt-5'>
                    <ul className='flex-column delivery-wrapper '>
                        <li className=''>
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg> {Math.floor(Math.random() * 10) + 20} Days Delivery
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Functional app
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>1 operating system
                        </li>
                        <li>
                            <svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>App submission
                        </li>
                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#1dbf73"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>App icon
                        </li>
                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Splash screen</li>

                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Ad network integration</li>
                        <li><svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>Source code</li>

                    </ul>
                </div>

                <button onClick={handleSubmit} className='btn btn-success btn-block mt-5' >Continue (${props.layCVChiTietTheoMaCV?.congViec.giaTien*3})</button>
            </div>
        </div>

        <div className='mt-4 mb-4 compare'  >
            <a className='text-success' >Compare Packages</a>
        </div>
    </div>
   

}
