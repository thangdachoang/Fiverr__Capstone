import React, { Fragment, useState } from 'react'
import { capNhatThongTinCaNhanNguoiDungAction } from '../../../redux/action/actionLayChiTietThongTinCaNhan'
import '../Info/Info.css'
import FiverrLearnComponent from './FiverrLearnComponent/FiverrLearnComponent'
import SellerCardComponent from './SellerCard-component/SellerCardComponent'
import SellerProfile from './SellerProfile/SellerProfile'


export default function Info(props) {
   let {renderND} = props

    return (
        <Fragment>
            <SellerCardComponent renderND={renderND}/>
            <FiverrLearnComponent/>
            <SellerProfile renderND={renderND}/>
        </Fragment>
    )
}
