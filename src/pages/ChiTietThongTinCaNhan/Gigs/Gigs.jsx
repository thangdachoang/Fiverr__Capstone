import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

import { ACCESS_TOKEN, DOMAIN_FIVERR, TOKEN } from '../../../util/setting'

import '../Gigs/Gigs.css'




export default function Gigs() {

    const [danhSachCVDaThue, setDanhSachCVDaThue] = useState([])

    useEffect(() => {
        let promise = axios({
            method: 'get',
            url: `${DOMAIN_FIVERR}/thue-cong-viec/lay-danh-sach-da-thue`,
            headers: {
                "TokenCybersoft": TOKEN,
                "token": localStorage.getItem(ACCESS_TOKEN)
            }
        })
            promise.then((result) => {
                setDanhSachCVDaThue(result.data.content)

            })
            promise.catch((error) => {
                console.log(error)
            })
    }, [])

    let deleteCVDaThue = (id) =>{
        let promise = axios({
            method: 'delete',
            url: `${DOMAIN_FIVERR}/thue-cong-viec/${id}`,
            headers: {
                "TokenCybersoft": TOKEN,
                "token": localStorage.getItem(ACCESS_TOKEN)
            }
        })
            promise.then((result) => {
                console.log(result.data.content)
                console.log(id)
                alert('Xoá thành công')
                window.location.reload()

            })
            promise.catch((error) => {
                console.log(error)
            })
    }

    let renderDanhSachDaThue = () => {
        return danhSachCVDaThue.map((CVDT, id) => {
            return <div key={id} className='row boxCVDT' >
                <div className="col-sm-4 CVDT_left">
                    <img src={CVDT.congViec.hinhAnh} alt="" />
                </div>
                <div className="col-sm-8 CVDT_right">
                    <h6 className='mt-2 mb-2'>{CVDT.congViec.tenCongViec}</h6>
                    <div className="row CVDT_right_review">
                        <div className="col-10">
                            <p>{CVDT.congViec.moTa}</p>
                        </div>
                        <div className="col-2">
                            <span className='start-svg'>
                                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                <span>
                                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                <span>
                                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                <span>
                                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                <span>
                                <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg></span>
                                <p style={{color:'gold', fontSize:'18px'}}>{CVDT.congViec.saoCongViec}</p>
                               
                        </div>
                    </div>
                    <button onClick={() => { 
                        deleteCVDaThue(CVDT.id)
                     }} className='btn btn-danger mt-2 mb-2'>Delete</button>

                </div>
            </div>
        })
    }



    return (
        <Fragment>
            <div className='gigs-column'>
                <div className='react-seller-gigs'>
                    <section className="seller-gigs cf">
                        <svg width="252" height="104" viewBox="0 0 252 104" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M250.641 96.0005H0.874023V102.711H250.641V96.0005Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M195.334 0.822754H110.963L92.077 95.9933H176.448L195.334 0.822754Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M98.027 66.0029H182.398" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M77.8599 84.1191H15.3289V96.0006H77.8599V84.1191Z" fill="#222325" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M81.2271 74.4419H18.6961V84.1192H81.2271V74.4419Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M72.4349 59.8315H12.4169V74.4419H72.4349V59.8315Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M76.4811 50.5669H16.4631V59.8383H76.4811V50.5669Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M52.2679 59.8315V74.4419" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M59.1 59.8315V74.4419" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M59.0999 59.8315H52.2679V74.4419H59.0999V59.8315Z" fill="#222325" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M22.749 55.1992H69.831" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M196.202 69.8657H229.473V79.3541C229.473 83.7653 227.72 87.9959 224.6 91.1151C221.479 94.2343 217.247 95.9867 212.834 95.9867V95.9867C208.422 95.9848 204.192 94.2317 201.073 91.1126C197.954 87.9936 196.202 83.7641 196.202 79.3541V69.8657Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M229.473 79.354C229.473 83.764 227.721 87.9935 224.602 91.1126C221.483 94.2316 217.253 95.9848 212.841 95.9866V95.9866C208.428 95.9866 204.196 94.2343 201.075 91.115C197.955 87.9958 196.202 83.7652 196.202 79.354" fill="#222325"></path><path d="M229.473 79.354C229.473 83.764 227.721 87.9935 224.602 91.1126C221.483 94.2316 217.253 95.9848 212.841 95.9866V95.9866C208.428 95.9866 204.196 94.2343 201.075 91.115C197.955 87.9958 196.202 83.7652 196.202 79.354" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M235.416 82.0409C238.532 82.0409 241.058 79.5159 241.058 76.4011C241.058 73.2863 238.532 70.7612 235.416 70.7612C232.3 70.7612 229.774 73.2863 229.774 76.4011C229.774 79.5159 232.3 82.0409 235.416 82.0409Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M206.751 64.2257C208.235 62.5883 207.787 60.0623 206.751 57.0954C206.403 55.9619 206.371 54.7548 206.658 53.6043C206.945 52.4539 207.542 51.4037 208.382 50.5669" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M214.192 64.1067C214.64 61.5806 216.866 59.0616 215.382 55.7939C213.898 52.5261 211.812 51.1896 212.708 46.2915" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M219.967 63.4768C219.673 61.6994 220.772 60.356 221.451 57.8789C221.653 57.0598 221.688 56.2085 221.555 55.3755C221.421 54.5425 221.122 53.7448 220.674 53.0298" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M114.445 85.8049C117.764 82.7671 118.388 78.0494 115.84 75.2677C113.292 72.486 108.536 72.6936 105.217 75.7314C101.898 78.7693 101.274 83.487 103.822 86.2687C106.37 89.0504 111.126 88.8428 114.445 85.8049Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M125.558 77.8633H150.289" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M124.606 83.2725H141.763" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M167.53 74.3018L168.93 78.3602C168.941 78.364 168.954 78.364 168.965 78.3602L173.347 79.095C173.396 79.095 173.403 79.1649 173.347 79.1999L169.553 82.4467C169.549 82.4651 169.549 82.4842 169.553 82.5026L169.455 87.0159C169.455 87.0649 169.392 87.1069 169.35 87.0789L165.633 85.0287H165.577L161.132 87.0789C161.124 87.0891 161.112 87.0956 161.098 87.0969C161.085 87.0982 161.072 87.0942 161.062 87.0859C161.052 87.0775 161.045 87.0655 161.044 87.0523C161.043 87.0392 161.047 87.0261 161.055 87.0159L162.546 82.5026C162.553 82.4846 162.553 82.4647 162.546 82.4467L159.9 79.2349C159.894 79.2251 159.891 79.214 159.89 79.2026C159.89 79.1912 159.892 79.1798 159.897 79.1694C159.901 79.1591 159.909 79.1501 159.918 79.1432C159.927 79.1363 159.938 79.1317 159.949 79.1299L164.59 78.3952C164.608 78.4007 164.628 78.4007 164.646 78.3952L167.446 74.3368C167.453 74.2528 167.516 74.2528 167.53 74.3018Z" fill="#1DBF73" stroke="#1DBF73" strokeMiterlimit="10"></path><path d="M104.537 33.1716C109.381 28.1475 128.435 17.7775 140.685 30.7156C152.935 43.6536 161.3 44.2134 171.8 38.9794C182.3 33.7454 188.523 35.3058 188.523 35.3058" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M173.662 0.822754C173.662 0.822754 147.062 35.5364 185.562 49.8949" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M137.859 28.4066C141.674 24.9146 142.392 19.4915 139.462 16.2937C136.533 13.0958 131.066 13.3342 127.251 16.8262C123.436 20.3181 122.718 25.7413 125.647 28.9391C128.577 32.137 134.044 31.8986 137.859 28.4066Z" fill="#222325" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M120.217 46.8441C123.241 54.7301 133.398 58.1727 142.897 54.5411C152.396 50.9095 157.66 41.5681 154.636 33.6611L120.217 46.8441Z" stroke="#222325" strokeWidth="1.5" strokeMiterlimit="10"></path></svg>
                        <div className='mt-3'>
                            <b>It seems that you don't have any active Gigs</b>
                        </div>
                        <div className='mt-5'>
                            <h1>Your Gigs</h1>
                            <div>
                                {renderDanhSachDaThue()}
                            </div>
                        </div>



                    </section>




                </div>
            </div>
        </Fragment>
    )
}
