import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ACCESS_TOKEN, DOMAIN_FIVERR, TOKEN } from '../../../util/setting'

import '../PeopleComment/PeopleComment.css'


export default function PeopleComment(props) {

    const [comment, setComment] = useState("");
    let dispatch = useDispatch();

    const date = new Date();
    const year = date.getFullYear();
    // 👇️ getMonth returns integer from 0(January) to 11(December)
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const withSlashes = [day, month, year].join('/');


    let inputTaoBinhLuanChoCongViec = (e) => {
        setComment(e.target.value)
        console.log("Binh luan", e.target.value)
    }

    let handleTaoBinhLuanChoCongViec = () => {
        let promise = axios({
            method: 'post',
            url: `${DOMAIN_FIVERR}/binh-luan`,
            data: {
                "maCongViec": props.maCV,
                "maNguoiBinhLuan": props.uLogin.user.id,
                "ngayBinhLuan": `${withSlashes}`,
                "noiDung": comment,
                "saoBinhLuan": 4
            },
            headers: {
                "tokenCybersoft": TOKEN,
                "token": localStorage.getItem(ACCESS_TOKEN)
            }
        });
        promise.then((result) => {
            setComment("");
        })
        promise.catch((error) => {
            console.log(error.response?.data)
        })

    }


    return (
        <Fragment>
            <div className='people-comment-new mt-5 row'>
                <div className='people-comment-avatar col-2'>
                    <img src="https://i.pravatar.cc/?u=-77" className='' alt="" />
                </div>

                <div className='col-10 '>
                    <div>
                        <textarea className='' name="" id="" onChange={inputTaoBinhLuanChoCongViec} value={comment}></textarea>
                    </div>
                    <div>
                        <button onClick={handleTaoBinhLuanChoCongViec} className='btn btn-success'>submit</button>
                    </div>
                </div>


            </div>
        </Fragment>
    )
}
